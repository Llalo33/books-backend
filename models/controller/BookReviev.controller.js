const Reviev = require('../BookReviev.model')

const bookRevievController = {
    postBookReviev : async (req, res) => {
        try {
            const reviev = await Reviev.create({
                text: req.body.text,
                authorReviev: req.body.authorReviev,
                bookRevievId: req.body.bookRevievId
            })
            res.json(reviev)
        } catch (error) {
            res.json(error)
        }
    },
    deleteBookReviev : async (req, res) => {
        try {
            const reviev = await Reviev.findByIdAndRemove(req.params.id)
            res.json(reviev)
        } catch (error) {
            res.json(error)
        }
    },
    getBookReviev : async (req, res) => {
        try {
            const reviev = await Reviev.findById({bookRevievId : req.params.id})
            res.json(reviev)
        } catch (error) {
            res.json(error)
        }
    }
}

module.exports = bookRevievController