const mongoose = require('mongoose')

// Step1
const userSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: false },
  MOB: { type: Number, required: false },
  PASS: { type: String, required: false },
  INV: { type: String, required: false },
  loc: { type: String, required: false },
  str: { type: String, required: false },
  PIN: { type: String, required: false },
  city: { type: String, required: false },
  state: { type: String, required: false },
})
// Step2
const User = mongoose.model('user', userSchema)

module.exports = User
