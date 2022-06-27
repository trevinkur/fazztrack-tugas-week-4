const express = require("express")
const router = express.Router()
const bookingSeatController = require("../controller/bookingSeatController.js")

router.post("/", bookingSeatController.addBookingSeat)
router.get("/", bookingSeatController.getAllBookingSeat);
router.patch("/:id", bookingSeatController.updateBookingSeat)
router.delete("/:id", bookingSeatController.removeBookingSeatById)

module.exports = router;