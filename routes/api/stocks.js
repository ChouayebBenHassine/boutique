const express = require('express')
const router = express.Router();

// Add Mongoose Schema ./models/client
// Client Model 
const Stock = require('../../models/stock')

// First thing: module.exports = router;

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/',(req, res)=>{  // use '/' and not '/api/items/
    Stock.find()
        .then(stocks=> res.json(stocks))
})

// @route   POST api/items
// @desc    Add New Item
// @access  Public
router.post('/',(req, res)=>{ 
    const newStock = new Stock({
        id : req.body.id,
        quantite : req.body.quantite,
       

    })
    newStock
        .save()
        .then(stock => res.json({success : true,stock}))
        .catch(err=>res.json('Save error: '+err))
 })

// @route   DELETE api/items/:id
// @desc    Delete Item
// @access  Public
router.delete('/:id', function(req, res, next) {
    Stock.remove({id: req.params.id},function(err,stock) {
      console.log("Deleting stock " + req.params.id);
      res.json(stock);
    })
  });

module.exports = router;