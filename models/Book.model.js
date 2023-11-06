const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    name: String,
    authorId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Author'
  },
    genresId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Genre'
  }
})

const Book = mongoose.model('Book' , bookSchema)

module.exports = Book