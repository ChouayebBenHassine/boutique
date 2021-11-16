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






//update employee

router.put('/:cin', (req, res) => {
  Employee.updateOne({
    cin: req.params.cin
}, {
    $set: {
      nom : req.body.nom,
        prenom : req.body.prenom,
        mail : req.body.mail,
        telephone : req.body.telephone,
        categorie: req.body.categorie,

    }
}).then(client=>{res.json(client);console.log("updated")}).catch(err=>{res.json(err);console.log("noo") })

  })





//get employee by id
router.get('/:cin',(req, res)=>{  
  Employee.findOne({ "cin" : req.params.cin}).then(emp=>res.json(emp)) })




//get employee by name

router.get('/rechercheName/:name',(req, res)=>{  
  Employee.findOne({"nom":req.params.name}).then(emp=>res.json(emp)) })



 //get employee by categorie

router.get('/rechercheCateg/:categ',(req, res)=>{  
  Employee.findOne({"categorie.designation":req.params.categ}).then(emp=>res.json(emp)) })
  








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