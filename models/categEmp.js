const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CategEmpSchema = new Schema({
    id:{
        type: Number,
        required: true
    },
    designation:{
        type: String,
        required:true
       
    },

    salaire:{
        type:Number,
        required:true
    }

    
    

})
module.exports = CategEmp = mongoose.model('CategEmp', CategEmpSchema)