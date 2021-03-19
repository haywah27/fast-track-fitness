const db = require("../models");
const router = require("express").Router();

// create workout
router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body).then((result => {
        res.json(result);
    })).catch(err => {
        res.json(err);
    });
});

// read workout
router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(result => {
        res.json(result);
    }).catch(err => {
        res.json(err);
    });
});

// update workout 
router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate(
        { _id: req.params.id },
        {
            $inc: { totalDuration: req.body.duration },
            $push: { exercises: req.body }
        },
        { new: true })
        .then(result => {
            res.json(result);
        }).catch(err => {
            res.json(err);
        });
});

// route for displaying workout dashboard
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(result => {
        res.json(result);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;