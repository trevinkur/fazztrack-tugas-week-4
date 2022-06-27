const db = require("../helper/db_connection.js")

module.exports = {
    get: function (req,res){
        return new Promise((resolve,reject) => {
            db.query(`SELECT * FROM movies ` , (err,result) => {
                console.log("get all")
                if(err){
                    reject({
                        message: "ERROR, Server is down",
                        status: "500"
                    })
                }

                resolve({
                    message: "Success",
                    status: 200,
                    data: result
                })   
            })
        })

    },

    search: function (req,res){
        return new Promise((resolve,reject) => {
            console.log("search")
            db.query(`SELECT * FROM movies 
            WHERE title LIKE "%${req.query.title}%"
            ORDER BY title` , (err,result) => {
                if(err){
                    reject({
                        message: "ERROR, Server is down",
                        status: "500"
                    })
                }

                resolve({
                    message: "Success",
                    status: 200,
                    data: result
                })   
            })
        })

    },

    sort: function (req,res){
        return new Promise((resolve,reject) => {
            console.log("sort")
            db.query(`SELECT * FROM movies 
                ORDER BY ${req.query.sortby}` , (err,result) => {
                console.log(result)
                if(err){
                    reject({
                        message: "ERROR, Server is down",
                        status: "500"
                    })
                }

                resolve({
                    message: "Success",
                    status: 200,
                    data: result
                })   
            })
        })

    },


    add: function(req,res) {
        return new Promise ((resolve,reject) => {
            const {title, cover, release_date, duration, director, description, cast, categories} = req.body
            console.log(title)
            db.query(`INSERT INTO movies (title, cover, release_date, duration, director, description, categories, cast)
             VALUES ('${title}', '${cover}', '${release_date}', '${duration}','${director}','${description}', '${categories}', '${cast}')`, (err, results)=> {
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
            db.query(`SELECT * FROM movies WHERE movie_id="${req.params.id}"`, (err,result) => {
                console.log(result)
                const oldData = {
                    ...result[0],
                    ...req.body
                }
              
                const {title, cover, release_date, director, description, cast, categories} = oldData
                console.log(title)
                db.query(`UPDATE movies SET title="${title}", cover="${cover}", release_date="${release_date}", director="${director}", description="${description}", categories="${categories}", cast="${cast}" 
                WHERE movie_id="${req.params.id}"`, (err, results)=> {
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
            db.query(`DELETE FROM movies WHERE movie_id="${req.params.id}" ` , (err,result) => {
                if(err){
                    reject({
                        message: "ERROR, Your input is wrong",
                        status: "400"
                    })
                }

                resolve({
                    message: "Success",
                    status: 200,
                    data: result
                })   
            })
        })

    },
}