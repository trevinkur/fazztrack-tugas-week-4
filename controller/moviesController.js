const Movies = require("../model/Movies.js")

module.exports = {
    getAllMovies: async function(req,res) {
         
        try {
            const result = await Movies.get(req,res)
            res.send(result)
        } catch(err) {
            res.status(500).send(err)
        }
    },

    searchMoviesByTitle:  async function(req,res) {
         
        try {
            const result = await Movies.search(req,res)
            res.send(result)
        } catch(err) {
            res.status(500).send(err)
        }
    },

    sortMovies: async function(req,res) {
         
        try {
            const result = await Movies.sort(req,res)
            res.send(result)
        } catch(err) {
            res.status(500).send(err)
        }
    },

    addMovies: async function(req,res) {
            try {
                const result = await Movies.add(req,res)
                res.send(result)
            } catch(err) {
                res.status(404).send(err)
            }
    },
    
    updateMovies: async function(req,res) {
        try {
            const result = await Movies.update(req,res)
            res.send(result)
        } catch(err) {
            res.status(404).send(err)
        }
    },

    removeMoviesById: async function(req,res) {
        try {
            const result = await Movies.removeById(req,res)
            res.send(result)
        } catch(err) {
            res.status(404).send(err)
        }
    },
}

