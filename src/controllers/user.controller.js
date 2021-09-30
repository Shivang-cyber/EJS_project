const express = require('express')
const User = require('../model/user.model')
const Data = require("../model/data.model")
const crudController = require('../controllers/crudController')
const router = express.Router()
// CRUD
router.post('', crudController.post(User))
router.get('', async function(req,res){
 const users = await Data.find().lean().exec()
 console.log(Data);
 res.render('users/allUsers',{users:users})
})
router.patch('/:id', crudController.patch(User))
router.delete('/:id', crudController.deleteOne(User))
router.get('/:id', crudController.getOne(User))

module.exports = router
 