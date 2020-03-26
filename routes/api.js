//This Routes file is for all of the API Routes.  I will need to create another js file for my HTTP routes, i.e, Post, Put
//Store ROUTES// Route get route
var api_express = require("express");
var router = api_express.Router();

const db = require("../models");

//get route for single workout
router.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json(data)
        }
    })
})

//get route for range
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(exercise => {
        res.json(exercise);
    })
    .catch(err => {
        res.json(err);
    });
})

//put route
router.put("/api/workouts/:id", (req, res) => {
    console.log(req.body)
    //res.sendFile(path.join(__dirname, "public/exercise.html"));
})
//post route for posting workout
router.post("/api/workouts", (req, res) => {
    console.log(req.body)
    db.workout.create(req.body, function (err, data) {
        if (err)
            throw err;

        res.send(data)
    })
})
//get 
//delete




// Export routes for server.js to use.
module.exports = api_router;