const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const FactureSchema = new Schema({
    numFact:{
        type: Number,
        required: true
    },
    dateFact:{
        type: Date,
        default:Date.now
       
    },

    total:{
        type: Number,
        required:true
        
    },

    modePayement:{
        type: String,
        required: true
        
    },

    client:{
      refClient :{type:Number,required:true},
      nom:{type:String},
      prenom:{type:String},
      addresse:{type:String},
      telephone:{type:String}
        
    },

    

})
module.exports = Facture = mongoose.model('Facture', FactureSchema)