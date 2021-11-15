const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CoutSchema = new Schema({
    id:{
        type: Number,
        required: true
    },
    designation:{
        type: String,
       
    },

    total:{
        type: Number,
        required:true
        
    }
})
module.exports = Cout = mongoose.model('Cout', CoutSchema)