const express = require('express')
const router = express.Router();

// Add Mongoose Schema ./models/client
// Client Model 
const Article = require('../../models/article')

// First thing: module.exports = router;

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/',(req, res)=>{  // use '/' and not '/api/items/
  Article.find()
        .then(articles=> res.json(articles))
})

// @route   POST api/items
// @desc    Add New Item
// @access  Public
router.post('/',(req, res)=>{ 
    const newArticle = new Article({
      numArticle : req.body.numArticle,
        nom : req.body.nom,
        designation : req.body.designation,
        prixUnitaire : req.body.prixUnitaire,
        promotion : req.body.promotion,
        TVA : req.body.TVA,
        stock:req.body.stock,
        categorie:req.body.categorie,
        image:req.body.image

    })
    newArticle
        .save()
        .then(article => res.json({success : true,article}))
        .catch(err=>res.json('Save error: '+err))
 })

// @route   DELETE api/items/:id
// @desc    Delete Item
// @access  Public
router.delete('/:numArticle', function(req, res, next) {
    Article.remove({numArticle: req.params.numArticle},function(err,article) {
      console.log("Deleting article " + req.params.numArticle);
      res.json(article);
    })
  });

module.exports = router;