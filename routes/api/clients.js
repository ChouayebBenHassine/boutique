const express = require('express');
const client = require('../../models/client');
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


 //update client

router.put('/:refClient', (req, res) => {
  Client.updateOne({
    refClient: req.params.refClient
}, {
    $set: {
      nom : req.body.nom,
      prenom : req.body.prenom,
      addresse : req.body.addresse,
      telephone : req.body.telephone,

    }
}).then(client=>{res.json(client);console.log("updated")}).catch(err=>{res.json(err);console.log("noo") })

  })
  

//get client by id
router.get('/:refClient',(req, res)=>{  
  Client.findOne({ "refClient" : req.params.refClient}).then(client=>res.json(client)) })




//get client by name

router.get('/rechercheName/:name',(req, res)=>{  
  Client.findOne({"nom":req.params.name}).then(client=>res.json(client)) })



 //get client by addresse

router.get('/rechercheAddress/:add',(req, res)=>{  
  Client.findOne({"addresse":req.params.add}).then(client=>res.json(client)) })
  



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