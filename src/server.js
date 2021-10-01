const express = require('express')
const mongoose = require('mongoose')

const connect = require('./config/db')

const userController = require('./controllers/user.controller')
const dataController = require('./controllers/link.controller')
const User = require("./model/user.model")
// Step1
const dbSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  image1: { type: String, required: true },
  image2: { type: String, required: true },
  image3: { type: String, required: true },
  image4: { type: String, required: true },
})
// Step2
const DB = mongoose.model('db', dbSchema)

// const { mongoose } = require('mongoose')
const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.set('view engine', 'ejs')
app.use(express.static('public'))
// app.use('/data', dataController)

app.use('/users', userController)

app.get('/users/:id',async(req,res)=>{
   const user = await DB.find().lean().exec()
   const rem = user.filter(W=>W.sr==req.params.id)
   console.log(rem)
   res.render('users/catologue', {
     user: rem,
   })
})

app.listen(5540, async function () {
  await connect()
  console.log('listening on port ....5540')
})
