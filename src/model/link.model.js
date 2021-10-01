const mongoose = require('mongoose')

const LinkSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tag: { type: String, required: true },
})

const Link = mongoose.model('links', LinkSchema)

module.exports =Link
 