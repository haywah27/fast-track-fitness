const db = require("../models");
const router = require("express").Router();


// create workout
router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body).then((dbWorkout => {
        res.json(dbWorkout);
    })).catch(err => {
        res.json(err);
    });
});



module.exports = router;