const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    cin:{
        type: Number,
        required: true
    },
    nom:{
        type: String,
       
    },

    prenom:{
        type: String,
        
    },

    mail:{
        type: String,
        
        
    },

    telephone:{
        type: Number,
        
    },

    categorie:{
        id:{type:Number,required:true},
        designation:{type:String,required:true},
        salaire:{type:Number,required:true}
    }
    

    

})
module.exports = Employee = mongoose.model('Employee', EmployeeSchema)