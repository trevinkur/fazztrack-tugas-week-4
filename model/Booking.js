const db = require("../helper/db_connection.js")

module.exports = {
    get: function (req,res){
        return new Promise((resolve,reject) => {
            db.query(`SELECT CONCAT(users.first_name, " ", users.last_name) AS fullname,
                schedule.schedule, schedule.show_time,
                schedule.cinema_id, schedule.movie_id, 
                booking_seat.seat, SUM(booking_seat.price) AS totalPrice,
                payment_method
                FROM booking
                JOIN booking_seat
                  ON booking.booking_seat_id = booking_seat.booking_seat_id
                JOIN schedule 
                 ON booking.schedule_id = schedule.schedule_id
                JOIN users
                ON booking.user_id = users.user_id` , (err,result) => {
                if(err){
                    console.log(err)
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
            const {booking_seat_id, schedule_id, user_id, payment_method} = req.body
            db.query(`INSERT INTO booking (booking_seat_id, schedule_id, user_id, payment_method) 
            VALUES ('${booking_seat_id}', '${schedule_id}', '${user_id}', "${payment_method}")`, (err, results)=> {
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
            db.query(`SELECT * FROM booking WHERE booking_id="${req.params.id}"`, (err,result) => {
                const oldData = {
                    ...result[0],
                    ...req.body
                }
              
                const {show_time, status_room, price}  = oldData
                db.query(`UPDATE booking SET show_time="${show_time}", status_room="${status_room}", price="${price}"
                WHERE booking_id="${req.params.id}"`, (err, results)=> {
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
            db.query(`DELETE FROM booking WHERE booking_id="${req.params.id}" ` , (err,result) => {
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