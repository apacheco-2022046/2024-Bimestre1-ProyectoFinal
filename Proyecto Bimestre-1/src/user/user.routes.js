'use strict'

import express from 'express'
import { validateJwt, isAdmin } from '../middlewares/validate-jwt.js'
import {test, register, login, update, deleteUsuario} from './user.controller.js'

const api = express.Router()
//Midleware
api.get('/test', validateJwt,test)
api.post('/register', register)
api.post('/login', login)
api.put('/update/:id',update)
api.delete('/eliminarUser/:id',deleteUsuario)
//api.delete('/delete/:id',deleteU)

//export const api  >- tengo que si o si el nombre que esta en este archivo Ej: api
export default api //Importar con otro nombre ej: userRoters