import mongoose from "mongoose"

const CategoriaSchema = mongoose.Schema({
    categoria:{
        type:String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    }


    //Considero que estos 2 datos son sufucientes
    
})


export default mongoose.model('categoria',CategoriaSchema)