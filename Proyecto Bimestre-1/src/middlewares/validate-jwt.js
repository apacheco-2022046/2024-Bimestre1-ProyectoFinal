'use strict'

import jwt from 'jsonwebtoken'
import User from '../user/user.model.js'

export const validateJwt = async (req, res, next) => {
    try {
        //Obtener la llave de acceso al token
        let secretKey = process.env.SECRET_KEY
        //Obtener el token de los bheaders
        let { token } = req.headers
        //Verificar si viene el token
        if (!token) return res.status(401).send({ message: 'Unauthorized' })
        //Obtener el uid que envio el token
        let { uid } = jwt.verify(token, secretKey)
        //Validar si el usuario existe en la DB
        let user = await User.findOne({ _id: uid })
        if (!user) return res.status(404).send({ mesagge: 'User not found' })
        //Ok del Middleware
         req.user = user

        next()
    } catch (err) {
        console.error(err)
        return res.status(401).send({ message: 'Invalid token or expired' })
    }
}



export const isAdmin = async (req, res, next) => {
    try {
    let{role} = req.user
    if(!role || role !== 'ADMIN') return res.status(403).send({mesagge:`you dont have acess Username`})
    } catch (err) {
        console.error.status(401).send({ mesagge: 'Unauthorized role' })
        return res.status(401).send({ mesagge: 'Unauthorized role' })
    }
}



//api.post('/test',validateJwt(),test)