const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    numArticle:{
        type: Number,
        required: true
    },
    nom:{
        type: String,
       
    },

    designation:{
        type: String,
        
    },

    prixUnitaire:{
        type: Number,
        required: true
        
    },

    promotion:{
        type: Number,
        
    },
    TVA:{
        type: Number,
        required:true
        
    },

    stock:{
        id:{type:Number,required:true},
        quantite:{type:Number,required:true},
        
    },

    categorie:{
        id:{type:Number,required:true},
        designation:{type:String,required:true}
    },
    image:{
        type:String,
        required:true
    }

    

})
module.exports = Article = mongoose.model('Article', ArticleSchema)