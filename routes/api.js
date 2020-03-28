
var api_express = require("express");
var api_router = api_express.Router();

const db = require("../models");

//get route for single workout
api_router.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json(data)
        }
    })
})

//get route for range
api_router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(exercise => {
            res.json(exercise);
        })
        .catch(err => {
            res.json(err);
        });
})

//put route
api_router.put("/api/workouts/:id", (req, res) => {
    console.log(req.body)
    db.Workout.findByIdAndUpdate(req.params.id,
        {
            $push: {
                exercises: req.body,
            }
        }, (err, data) => {
            if (err)
                throw err;

            res.json(data);
        });
})
//post route for posting workout
api_router.post("/api/workouts", (req, res) => {
    console.log(req.body)
    db.Workout.create({}, function (err, data) {
        if (err)
            throw err;

        res.send(data)
    })
})

// Export routes for server.js to use.
module.exports = api_router;