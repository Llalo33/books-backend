const express = require('express')
const bookController = require('../models/controller/Book.controller')

const rout = express()

rout.get('/book', bookController.getBook)
rout.get('/book/:id', bookController.getBookById)
rout.get('/book/:id', bookController.getBookGenres)
rout.patch('/book/:id', bookController.patchBook)
rout.post('/book', bookController.postBook)
rout.delete('/book/:id', bookController.deleteBook)

module.exports = rout