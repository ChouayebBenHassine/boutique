const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    refClient:{
        type: Number,
        required: true
    },
    nom:{
        type: String,
       
    },

    prenom:{
        type: String,
        
    },

    addresse:{
        type: String,
        
    },

    telephone:{
        type: Number,
        
    },

    

})
module.exports = Client = mongoose.model('Client', ClientSchema)