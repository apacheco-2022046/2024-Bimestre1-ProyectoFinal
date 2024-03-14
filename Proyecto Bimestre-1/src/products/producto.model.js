import mongoose from "mongoose"
import {Schema} from "mongoose"

const ProductoSchema = mongoose.Schema({
    nombreProducto:{
        type: String,
        required: true
    },

    descripcion:{
        type:String,
        required: true
    },

    precio:{
        type: Number,
        required: true
    },

    stock:{
        type: Number,
        required: true
    },

    categoria:{
        type: Schema.ObjectId,
        ref: 'categoria',
        required: true
    },

    
})


export default mongoose.model('producto',ProductoSchema)