const Book = require('../book.model')

const bookController = {
    postBook : async (req, res) => {
        try {
            const book = await Book.create({
                name: req.body.name,
                authorId: req.body.authorId,
                genresId: req.body.genresId
            })
            res.json(book)
        } catch (error) {
            res.json(error)
        }
    },
    deleteBook : async (req, res) => {
        try {
            const book = await Book.findByIdAndRemove(req.params.id)
            res.json(book)
        } catch (error) {
            res.json(error)
        }
    },
    patchBook : async (req, res) => {
        try {
            const book = await Book.findByIdAndUpdate(req.params.id , { 
                name: req.body.name,
                authorId: req.body.authorId,
                genresId: req.body.genresId
            })
            res.json(book)
        } catch (error) { 
            res.json(error)
        }
    },
    getBookById : async (req, res) => {
        try {
            const book = await Book.findById(req.params.id)
            res.json(book)
        } catch (error) {
            res.json(error)
        }
    },
    getBook : async (req, res) => {
        try {
            const book = await Book.find()
            res.json(book)
        } catch (error) {
            res.json(error)
        }
    },
    getBookGenres : async (req, res) => {
        try {
            const book = await Book.findById({genresId: req.params.id})
            res.json(book)
        } catch (error) {
            res.json(error)
        }
    }
} 

module.exports = bookController