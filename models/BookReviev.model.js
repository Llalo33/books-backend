const mongoose = require('mongoose')
const Book = require('./book.model')

const bookRevievSchema = mongoose.Schema({ 
    text: String,
    authorReviev: String,
    bookRevievId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Book'
    }
})

const Reviev = mongoose.model('Reviev', bookRevievSchema)

module.exports = Reviev