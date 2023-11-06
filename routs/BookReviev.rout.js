const express = require('express')
const bookRevievController = require('../models/controller/BookReviev.controller')

const rout = express()

rout.get('/bookReviev/:id', bookRevievController.getBookReviev)
rout.post('/bookReviev', bookRevievController.postBookReviev)
rout.delete('/bookReviev/:id', bookRevievController.deleteBookReviev)

module.exports = rout