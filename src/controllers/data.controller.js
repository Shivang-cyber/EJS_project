const express = require('express')
const Data = require('../model/data.model')
const crudController = require('../controllers/crudController')

const router = express.Router()
router.get('', crudController.get(Data))
module.exports = router
