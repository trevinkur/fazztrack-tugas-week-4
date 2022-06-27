const express = require("express")
const router = express.Router()
const bookingController = require("../controller/bookingController.js")


router.get("/", bookingController.getAllBooking);
router.post("/", bookingController.addBooking)
router.patch("/:id", bookingController.updateBooking)
router.delete("/:id", bookingController.removeBookingById)

module.exports = router;