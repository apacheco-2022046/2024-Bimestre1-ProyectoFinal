'use strict'

import  Express  from "express"
import { agregarCategoria, actulizarCategoria, eliminarCategoria } from './categoria.controller.js'
//import { validateJwt } from '../middlewares/validate-jwt.js'


const api = Express.Router()




api.post('/agregarCategorias',agregarCategoria)
api.put('/actualizarCategoria/:id',actulizarCategoria)
api.delete('/eliminarCategoria/:id',eliminarCategoria)


export default api