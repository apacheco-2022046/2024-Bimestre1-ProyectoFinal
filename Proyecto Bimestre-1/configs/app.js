//Confuracion de express

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import {config} from 'dotenv'
import userRouter from '../src/user/user.routes.js'
import categoriaRouter from '../src/category/categoria.routes.js'
import productoRouter from '../src/products/producto.routes.js'

const app = express() 
config()
const port = process.env.PORT || 3200


//Configurar el servidor
app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(cors()) //Aceptar solicitudes de diferentes origenes (local, remoto)
app.use(helmet())
app.use(morgan('dev'))//Crear solicitudes al servidor HTTP

app.use(userRouter)
app.use(categoriaRouter)
app.use(productoRouter)






//Levantar el servidor
export const initServer = () =>{
    app.listen(port)
    console.log(`Server HHTP running in port ${port}`)
}