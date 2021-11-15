const express = require('express');
const categorie = require('../../models/categorie');
const router = express.Router();

// Add Mongoose Schema ./models/client
// Client Model 
const CategEmp = require('../../models/categEmp')

// First thing: module.exports = router;

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/',(req, res)=>{  // use '/' and not '/api/items/
  CategEmp.find()
        .then(categEmps=> res.json(categEmps))
})

// @route   POST api/items
// @desc    Add New Item
// @access  Public
router.post('/',(req, res)=>{ 
    const newCategEmp = new CategEmp({
        id : req.body.id,
        designation : req.body.designation,
        salaire:req.body.salaire
       

    })
    newCategEmp
        .save()
        .then(categEmp => res.json({success : true,categEmp}))
        .catch(err=>res.json('Save error: '+err))
 })

// @route   DELETE api/items/:id
// @desc    Delete Item
// @access  Public
router.delete('/:id', function(req, res, next) {
  CategEmp.remove({id: req.params.id},function(err,categEmp) {
      console.log("Deleting categorie " + req.params.id);
      res.json(categEmp);
    })
  });

module.exports = router;