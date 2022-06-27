const Cinema = require("../model/Cinema.js")

module.exports = {
    getAllCinema: async function(req,res) {
         
        try {
            const result = await Cinema.get(req,res)
            res.send(result)
        } catch(err) {
            res.status(500).send(err)
        }
    },

    addCinema: async function(req,res) {
            try {
                const result = await Cinema.add(req,res)
                res.send(result)
            } catch(err) {
                res.status(404).send(err)
            }
    },
    
    updateCinema: async function(req,res) {
        try {
            const result = await Cinema.update(req,res)
            res.send(result)
        } catch(err) {
            res.status(404).send(err)
        }
    },

    removeCinemaById: async function(req,res) {
        try {
            const result = await Cinema.removeById(req,res)
            res.send(result)
        } catch(err) {
            res.status(404).send(err)
        }
    },
}

