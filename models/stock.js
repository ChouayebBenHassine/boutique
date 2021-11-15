const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const StockSchema = new Schema({
    id:{
        type: Number,
        required: true
    },
    quantite:{
        type: Number,
        required:true
       
    },

    
    

})
module.exports = Stock = mongoose.model('stock', StockSchema)