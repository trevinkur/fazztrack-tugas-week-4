const db = require("../helper/db_connection.js")

module.exports = {
    get: function (req,res){
        return new Promise((resolve,reject) => {
            db.query(`SELECT * 
                FROM users` , (err,result) => {
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

    getId:  function (req,res){
        return new Promise((resolve,reject) => {
            db.query(`SELECT * 
                FROM users 
                WHERE user_id = "${req.params.id}"` , (err,result) => {
                console.log(req.params.id)
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
    
    add:function(req,res) {
        return new Promise ((resolve,reject) => {
            const {first_name, last_name, password, email, phone_number, profile_pitcure} = req.body
            db.query(`INSERT INTO users (first_name, last_name, password, email, phone_number, profile_pitcure) 
            VALUES ('${first_name}', '${last_name}','${password}', '${email}', '${phone_number}', '${profile_pitcure}')`, (err, results)=> {
                if(err) {
                console.log(err)
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
            db.query(`SELECT * FROM booking WHERE users_id="${req.params.id}"`, (err,result) => {
                const oldData = {
                    ...result[0],
                    ...req.body
                }
              
                const {password, email, phone_number, profile_pitcure}  = oldData
                db.query(`UPDATE booking SET password="${password}", email="${email}", 
                price="${phone_number}", profile_pitcure="${profile_pitcure}"
                WHERE users_id="${req.params.id}"`, (err, results)=> {
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

           
        })
    },

    removeById: function (req,res){
        return new Promise((resolve,reject) => {
            db.query(`DELETE FROM users WHERE users_id="${req.params.id}" ` , (err,result) => {
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