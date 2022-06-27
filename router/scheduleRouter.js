const express = require("express")
const router = express.Router()
const scheduleController = require("../controller/scheduleController.js")


router.get("/", scheduleController.getAllSchedule);
router.post("/", scheduleController.addSchedule)
router.patch("/:id", scheduleController.updateSchedule)
router.delete("/:id", scheduleController.removeScheduleById)

module.exports = router;