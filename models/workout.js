const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    day:{
        type:Date,
        default: Date.now
    },
    exercises: [
        {
        type:{
            type:String,
            required:"Exercise type"
        },
        name:{
            type:String,
            required: "Name of exercise"
        },
        sets:{
            type: Number,

        },
        distance: {
            type: Number,
        }
       }
    ]

});

const workout = mongoose.model("Workout",workoutSchema)

module.exports = workout;