const express = require('express')
const router = express.Router();

// Add Mongoose Schema ./models/client
// Client Model 
const Cout = require('../../models/cout')

// First thing: module.exports = router;

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/',(req, res)=>{  // use '/' and not '/api/items/
  Cout.find()
        .then(couts=> res.json(couts))
})

// @route   POST api/items
// @desc    Add New Item
// @access  Public
router.post('/',(req, res)=>{ 
    const newCout = new Cout({
      id : req.body.id,
        designation : req.body.designation,
        total : req.body.total,
        

    })
    newCout
        .save()
        .then(cout => res.json({success : true,cout}))
        .catch(err=>res.json('Save error: '+err))
 })

// @route   DELETE api/items/:id
// @desc    Delete Item
// @access  Public
router.delete('/:id', function(req, res, next) {
  Cout.remove({id: req.params.id},function(err,cout) {
      console.log("Deleting cout " + req.params.id);
      res.json(cout);
    })
  });

module.exports = router;