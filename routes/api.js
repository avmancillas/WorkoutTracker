const router = require("express").Router();
const workout = require("../models/workout");

router.post("/api/workouts", ({body},res) => {
    workout.create(body)
    .then(workoutdb => {
        res.json(workoutdb);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post("/api/workouts/bulk", ({body}, res) => {
    workout.insertMany(body)
    .then(workoutdb => {
        res.json(workoutdb);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts", (req,res) => {
    workout.find({})
    .sort({date: -1 })
    .then(workoutdb => {
        res.json(workoutdb);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;