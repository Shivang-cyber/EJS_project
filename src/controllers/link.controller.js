const express = require('express')
const Link = require('../model/link.model')
const crudController = require('./crudController')

const router = express.Router()
router.get('', crudController.get(Link))
module.exports = router
