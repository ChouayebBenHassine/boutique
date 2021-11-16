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
        image:req.body.image,

    })
    newArticle
        .save()
        .then(article => res.json({success : true,article}))
        .catch(err=>res.json('Save error: '+err))
 })




//get article by id
/**router.get('/:numArticle',(req, res)=>{  
  Article.findOne({ numArticle : req.params.numArticle) }, function(err, post) {
    res.json(post);})
  });
  */


//get article by id
  router.get('/:num',(req, res)=>{  
    Article.findOne({ "numArticle" : req.params.num}).then(Art=>res.json(Art)) })


//get article by category

    router.get('/rechercheCateg/:categ',(req, res)=>{  
      Article.findOne({"categorie.id":req.params.categ}).then(Art=>res.json(Art)) })
      
    
   
    
//get article by name

router.get('/rechercheName/:name',(req, res)=>{  
  Article.findOne({"name":req.params.name}).then(Art=>res.json(Art)) })
  






//update article

router.put('/:numArticle', (req, res) => {
  Article.updateOne({
    numArticle: req.params.numArticle
}, {
    $set: {
        nom: req.body.nom,
        designation : req.body.designation,
        prixUnitaire : req.body.prixUnitaire,
        promotion : req.body.promotion,
        TVA : req.body.TVA,
        stock:req.body.stock,
        categorie:req.body.categorie,
        image:req.body.image,

    }
}).then(art=>{res.json(art);console.log("updated")}).catch(err=>{res.json(err);console.log("noo") })

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