const mongoose = require('mongoose')

const connect = () => {
  return mongoose.connect(
    'mongodb+srv://Manney:9026724930@ape.cyihp.mongodb.net/Index?retryWrites=true&w=majority'
  )
}

module.exports = connect