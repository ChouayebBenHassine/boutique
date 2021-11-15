const express = require('express')
const router = express.Router();

// Add Mongoose Schema ./models/client
// Client Model 
const Client = require('../../models/client')

// First thing: module.exports = router;

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/',(req, res)=>{  // use '/' and not '/api/items/
    Client.find()
        .then(clients=> res.json(clients))
})

// @route   POST api/items
// @desc    Add New Item
// @access  Public
router.post('/',(req, res)=>{ 
    const newClient = new Client({
        refClient : req.body.refClient,
        nom : req.body.nom,
        prenom : req.body.prenom,
        addresse : req.body.addresse,
        telephone : req.body.telephone,

    })
    newClient
        .save()
        .then(client => res.json({success : true,client}))
        .catch(err=>res.json('Save error: '+err))
 })

// @route   DELETE api/items/:id
// @desc    Delete Item
// @access  Public
router.delete('/:refClient', function(req, res, next) {
    Client.remove({refClient: req.params.refClient},function(err,client) {
      console.log("Deleting client " + req.params.refClient);
      res.json(client);
    })
  });

module.exports = router;