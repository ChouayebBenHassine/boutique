const express = require('express')
const router = express.Router();

// Add Mongoose Schema ./models/client
// Client Model 
const Facture = require('../../models/facture')

// First thing: module.exports = router;

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/',(req, res)=>{  // use '/' and not '/api/items/
  Facture.find()
        .then(factures=> res.json(factures))
})

// @route   POST api/items
// @desc    Add New Item
// @access  Public
router.post('/',(req, res)=>{ 
    const newFacture = new Facture({
      numFact : req.body.numFact,
      dateFact : req.body.dateFact,
      total : req.body.total,
        modePayement : req.body.modePayement,
        client : req.body.client,

    })
    newFacture
        .save()
        .then(facture => res.json({success : true,facture}))
        .catch(err=>res.json('Save error: '+err))
 })

// @route   DELETE api/items/:id
// @desc    Delete Item
// @access  Public
router.delete('/:numFact', function(req, res, next) {
  Facture.remove({numFact: req.params.numFact},function(err,facture) {
      console.log("Deleting article " + req.params.numFact);
      res.json(facture);
    })
  });

module.exports = router;