const express = require('express')
const User = require('../model/user.model')
const Link = require("../model/link.model")
const crudController = require('../controllers/crudController')
const router = express.Router()
// CRUD
router.post('', crudController.post(User))


router.get('', async function(req,res){
 const users = await Link.find().lean().exec()
 // console.log(users);
 res.render('users/index', { users: users })
})
router.patch('/:id', crudController.patch(User))
router.delete('/:id', crudController.deleteOne(User))
// router.get('/:id', async function(req,res){
//  const user = await DB.find({SR:req.params.id}).lean().exec()
//  res.render("catologue.ejs",{
//   user:user
//  })
// })

module.exports = router
 