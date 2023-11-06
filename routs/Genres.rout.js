const express = require('express')
const genresController = require('../models/controller/Genres.controller')

const rout = express()

rout.get('/genres', genresController.getGenres)
rout.post('/genres', genresController.postGenres)
rout.delete('/genres/:id', genresController.deleteGenres)

module.exports = rout