const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CategorieSchema = new Schema({
    id:{
        type: Number,
        required: true
    },
    designation:{
        type: String,
        required:true
       
    },

    
    

})
module.exports = Categorie = mongoose.model('categorie', CategorieSchema)