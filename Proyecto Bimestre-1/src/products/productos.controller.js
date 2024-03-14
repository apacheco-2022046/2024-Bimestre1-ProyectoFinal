'use string'
import categoriasModel from "../category/categoria.model.js"
import productosModel from "./producto.model.js"

export const test = (req,res)=>{
    return res.send('Hello Word')
}

export const agregarProducto = async(req,res)=>{
    try {
        let data = req.body
        let categoria = await categoriasModel.findOne({_id: data.categoria} )
        if(!categoria) return res.status(400).send({message:'Categoria no encontrada'})
        let producto = new productosModel(data)
        await producto.save()
        return res.send({message: `Se pudo agregar exitosamente el producto ${producto.nombreProducto} a la categoria ${categoria.categoria}`})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'No se pudo agregar Nuevo Producto'})

    }
}




export const listarProductos =async(req,res)=>{
    try {
        let producto = await productosModel.find()
        if(producto.length === 0) return res.status(400).send({message: 'Error'})
        return res.send({producto})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'No existen productos'})
        
    }
}