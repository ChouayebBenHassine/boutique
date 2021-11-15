const express = require('express')
const router = express.Router();

// Add Mongoose Schema ./models/client
// Client Model 
const Employee = require('../../models/employee')

// First thing: module.exports = router;

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/',(req, res)=>{  // use '/' and not '/api/items/
  Employee.find()
        .then(employees=> res.json(employees))
})

// @route   POST api/items
// @desc    Add New Item
// @access  Public
router.post('/',(req, res)=>{ 
    const newEmployee = new Employee({
      cin : req.body.cin,
        nom : req.body.nom,
        prenom : req.body.prenom,
        mail : req.body.mail,
        telephone : req.body.telephone,
        categorie: req.body.categorie,
        

    })
    newEmployee
        .save()
        .then(employee => res.json({success : true,employee}))
        .catch(err=>res.json('Save error: '+err))
 })

// @route   DELETE api/items/:id
// @desc    Delete Item
// @access  Public
router.delete('/:cin', function(req, res, next) {
  Employee.remove({cin: req.params.cin},function(err,employee) {
      console.log("Deleting employee " + req.params.cin);
      res.json(employee);
    })
  });

module.exports = router;