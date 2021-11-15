const express = require('express');
const categorie = require('../../models/categorie');
const router = express.Router();

// Add Mongoose Schema ./models/client
// Client Model 
const Categorie = require('../../models/categorie')

// First thing: module.exports = router;

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/',(req, res)=>{  // use '/' and not '/api/items/
  Categorie.find()
        .then(categories=> res.json(categories))
})

// @route   POST api/items
// @desc    Add New Item
// @access  Public
router.post('/',(req, res)=>{ 
    const newCategorie = new Categorie({
        id : req.body.id,
        designation : req.body.designation,
       

    })
    newCategorie
        .save()
        .then(categorie => res.json({success : true,categorie}))
        .catch(err=>res.json('Save error: '+err))
 })

// @route   DELETE api/items/:id
// @desc    Delete Item
// @access  Public
router.delete('/:id', function(req, res, next) {
  Categorie.remove({id: req.params.id},function(err,categorie) {
      console.log("Deleting categorie " + req.params.id);
      res.json(categorie);
    })
  });

module.exports = router;