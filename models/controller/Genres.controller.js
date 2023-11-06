const Genres = require('../Genres.model')

const genresController = {
    postGenres : async (req, res) => {
        try {
            const genres = await Genres.create({
                name: req.body.name,
                description: req.body.description
            })
            res.json(genres)
        } catch (error) {
            res.json(error)
        }
    },
    deleteGenres : async (req, res) => {
        try {
            const genres = await Genres.findByIdAndRemove(req.params.id)
            res.json(genres)
        } catch (error) {
            res.json(error)
        }
    },
    getGenres : async (req, res) => {
        try {
            const genres = await Genres.find()
            res.json(genres)
        } catch (error) {
            res.json(error)
        }
    }
}

module.exports = genresController