const BookingSeat = require("../model/BookingSeat.js")

module.exports = {
    getAllBookingSeat: async function(req,res) {
         
        try {
            const result = await BookingSeat.get(req,res)
            res.send(result)
        } catch(err) {
            res.status(500).send(err)
        }
    },

    addBookingSeat: async function(req,res) {
            try {
                const result = await BookingSeat.add(req,res)
                res.send(result)
            } catch(err) {
                res.status(404).send(err)
            }
    },
    
    updateBookingSeat: async function(req,res) {
        try {
            const result = await BookingSeat.update(req,res)
            res.send(result)
        } catch(err) {
            res.status(404).send(err)
        }
    },

    removeBookingSeatById: async function(req,res) {
        try {
            const result = await BookingSeat.removeById(req,res)
            res.send(result)
        } catch(err) {
            res.status(404).send(err)
        }
    },
}