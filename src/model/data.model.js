const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
  name: { type: String, reqquired: true },
  brand: { type: String, required: true },
  image1: { type: String, required: true },
  image2: { type: String, required: true },
  image3: { type: String, required: true },
  image4: { type: String, required: true },
})

const Data = mongoose.model('d', dataSchema)

module.exports = Data
