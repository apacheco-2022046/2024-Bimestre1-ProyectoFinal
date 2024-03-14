'use strict'
import categoriaModel from './categoria.model.js'


export const agregarCategoria = async(req,res)=>{
    try {
            let data = req.body
            let categoria = new categoriaModel(data)
            await categoria.save()
            return res.send({message: 'Se ha agregado categoria exitosamente',categoria})
        
    } catch (err) {
        console.error(err)

        return res.status(500).send({message: 'Error al agregar categoria .'})
    }
}



export const listarCategoria = async(req,res)=>{
    try {
            let categoria  = await categoriaModelo.find()
            if(categoria.length === 0) return res.status(400).send({message: 'Error'})
            return res.send({categoria})
    } catch (err) {
            console.error(err)
            return res.status(500).send({message: 'No existen cateorias'})
    }
}



export const actulizarCategoria = async(req,res)=>{

    try {
        let {id} = req.params
        let datos = req.body
        let actulizarCategoria = await categoriaModel.findOneAndUpdate(
            {_id: id},
                 datos,
            {new: true}

        )
        if(!actulizarCategoria)return res.status(401).send({message: 'No se puedo actualizar datos'})

        return res.send({message:'Actualizado',actulizarCategoria})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message:'Error al actulizar'})
    }
}



export const eliminarCategoria = async (req, res) => {

    try {
        let {id} = req.params
        let eliminarCategoria = await categoriaModel.findOneAndDelete({ _id: id })
        if (!eliminarCategoria) return res.status(404).send({ message: 'Categoria eliminada'})
        // await porDefecto(id, res)
        return res.send({ message: `La categoría ${eliminarCategoria.categoria} ha sido eliminada`})
    } catch (err) {
        console.error(err);

        return res.status(500).send({ message: 'Error al eliminar'})
    }
}