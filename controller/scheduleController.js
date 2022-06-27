const Schedule = require("../model/Schedule.js")

module.exports = {
    getAllSchedule: async function(req,res) {
         
        try {
            const result = await Schedule.get(req,res)
            res.send(result)
        } catch(err) {
            res.status(500).send(err)
        }
    },

    addSchedule: async function(req,res) {
            try {
                const result = await Schedule.add(req,res)
                res.send(result)
            } catch(err) {
                res.status(404).send(err)
            }
    },
    
    updateSchedule: async function(req,res) {
        try {
            const result = await Schedule.update(req,res)
            res.send(result)
        } catch(err) {
            res.status(404).send(err)
        }
    },

    removeScheduleById: async function(req,res) {
        try {
            const result = await Schedule.removeById(req,res)
            res.send(result)
        } catch(err) {
            res.status(404).send(err)
        }
    },


}