const express = require("express")
const router = express.Router()
const usersController = require("../controller/usersController.js")


router.get("/:id", usersController.getUserById)
router.get("/", usersController.getAllUser)
router.post("/", usersController.addUser)
router.patch("/:id", usersController.updateUser)
router.delete("/:id", usersController.removeUserById)

module.exports = router;