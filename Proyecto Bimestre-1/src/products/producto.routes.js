'use strict'
import  Express  from "express"
import {agregarProducto} from "./productos.controller.js"
import {validateJwt} from "../middlewares/validate-jwt.js"
import { listarProductos } from "./productos.controller.js"

const api  = Express.Router()


api.post('/agregarProducto',agregarProducto)
api.get('/listarProducto',listarProductos)




export default api