const mysql = require("mysql");
const {host, user, password, database} = process.env

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tickitz_tr"
  })
  
  db.connect((err)=> {
    if (err) {
      console.log(err)
    }
  
    console.log("db connected")
})

module.exports = db;