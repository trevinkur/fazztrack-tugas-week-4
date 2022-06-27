const User = require("../model/Users.js")

module.exports = {
    getAllUser: async function(req,res) {
         
        try {
            const result = await User.get(req,res)
            res.send(result)
        } catch(err) {
            res.status(500).send(err)
        }
    },

    getUserById: async function(req,res) {
         
        try {
            const result = await User.getId(req,res)
            res.send(result)
        } catch(err) {
            res.status(500).send(err)
        }
    },

    addUser: async function(req,res) {
            try {
                const result = await User.add(req,res)
                res.send(result)
            } catch(err) {
                res.status(404).send(err)
            }
    },
    
    updateUser: async function(req,res) {
        try {
            const result = await User.update(req,res)
            res.send(result)
        } catch(err) {
            res.status(404).send(err)
        }
    },

    removeUserById: async function(req,res) {
        try {
            const result = await User.removeById(req,res)
            res.send(result)
        } catch(err) {
            res.status(404).send(err)
        }
    },
}