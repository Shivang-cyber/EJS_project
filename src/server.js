const express = require('express')

const connect = require('./config/db')

const userController = require('./controllers/user.controller')
const dataController = require('./controllers/data.controller')
const app = express()

app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use('/data', dataController)
app.use('/users', userController)


app.listen(5540, async function () {
  await connect()
  console.log('listening on port ....5540')
})
