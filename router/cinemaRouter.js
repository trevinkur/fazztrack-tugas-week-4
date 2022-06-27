const express = require("express")
const router = express.Router()
const cinemaController = require("../controller/cinemaController.js")


router.get("/", cinemaController.getAllCinema);
router.post("/", cinemaController.addCinema)
router.patch("/:id", cinemaController.updateCinema)
router.delete("/:id", cinemaController.removeCinemaById)

module.exports = router;