const router = require("express").Router();
const Workout = require("../models/workout.js");

// create workout
router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(data => {
        res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

// read workout
router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
});

// // update workout
// router.put("/api/workouts:id", (req, res) => {

// });

// // delete workout
// router.delete("/api/workouts", (req, res) => {

// });

module.exports = router;