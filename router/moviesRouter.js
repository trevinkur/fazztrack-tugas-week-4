const express = require("express")
const router = express.Router()
const moviesController = require("../controller/moviesController.js")

router.use("/", (req, res, next) => {
    console.log(req.query.title)
    if(req.query.title) {
        router.get("/", moviesController.searchMoviesByTitle)
        next()
    } else if(req.query.sortby){
        router.get("/", moviesController.sortMovies)
        next()
    } else {
        router.get("/", moviesController.getAllMovies)
        next();
    }
} )


router.post("/", moviesController.addMovies)
router.patch("/:id", moviesController.updateMovies)
router.delete("/:id", moviesController.removeMoviesById)

module.exports = router;