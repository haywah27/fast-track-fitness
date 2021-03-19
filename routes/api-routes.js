const db = require("../models");
const router = require("express").Router();

// create workout
router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body).then((response => {
        res.json(response);
    })).catch(err => {
        res.json(err);
    });
});

// read workout
router.get("/api/workouts", async (req, res) => {
    res.json(
      await db.Workout.aggregate([
        { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
      ])
    );
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
        .then(response => {
            res.json(response);
        }).catch(err => {
            res.json(err);
        });
});


// route for workout dashboard
router.get("/api/workouts/range", async (req, res) => {
    
    res.json(
     await db.Workout.aggregate([
        { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
        { $sort : { day : -1 } },
        { $limit : 7 },
        { $sort : { day : 1 } }
      ])
    );
});


module.exports = router;