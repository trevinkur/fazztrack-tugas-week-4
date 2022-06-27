const db = require("../helper/db_connection.js")

module.exports = {
    get: function (req,res){
        return new Promise((resolve,reject) => {
            db.query(`SELECT *
                FROM schedule 
                JOIN movies 
                    ON schedule.movie_id = movies.movie_id
                JOIN cinema
                    ON schedule.cinema_id = cinema.cinema_id` , (err,result) => {
                console.log(result)
                        if(err){
                    reject({
                        message: "ERROR, Server is down",
                        status: "500"
                    })
                }

                resolve({
                    message: "Berhasil",
                    status: 200,
                    data: result
                })   
            })
        })

    },

    add: function(req,res) {
        return new Promise ((resolve,reject) => {
            const {schedule, place, movie_id, cinema_id, status_room, show_time} = req.body
            db.query(`INSERT INTO schedule (schedule, place, movie_id, cinema_id, status_room, show_time ) 
            VALUES ('${schedule}', '${place}', "${movie_id}", "${cinema_id}", "${status_room}", "${show_time}")`, (err, results)=> {
                console.log(err)
                if(err) {
                  reject({
                    message: "ERROR, your input is wrong",
                    status: 404
                 })
                }
                resolve({
                  message: "Success",
                  status: 200,
                  data: results
                })
              })
        })
    },

    update: function(req,res) {
        return new Promise ((resolve,reject) => {
            console.log(req.params.id)
            db.query(`SELECT * FROM schedule WHERE schedule_id="${req.params.id}"`, (err,result) => {
                const oldData = {
                    ...result[0],
                    ...req.body
                }
              
                const {schedule, place, movie_id, cinema_id, status_room, show_time} = oldData
                db.query(`UPDATE schedule SET schedule='${schedule}', place='${place}', movie_id='${movie_id}'
                , cinema_id="${cinema_id}", status_room="${status_room}", show_time="${show_time}" 
                WHERE schedule_id="${req.params.id}"`, (err, results)=> {
                    if(err) {
                      reject({
                        message: "ERROR, your input is wrong",
                        status: 404
                     })
                    }
                    resolve({
                      message: "Success",
                      status: 200,
                      data: results
                    })
                  })

            })

           
        })
    },

    removeById: function (req,res){
        return new Promise((resolve,reject) => {
            db.query(`DELETE FROM schedule WHERE schedule_id="${req.params.id}" ` , (err,result) => {
                if(err){
                    reject({
                        message: "ERROR, Server is down",
                        status: "500"
                    })
                }

                resolve({
                    message: "Berhasil",
                    status: 200,
                    data: result
                })   
            })
        })

    },
}