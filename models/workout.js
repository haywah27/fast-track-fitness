const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    trim: true,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        validate: [({ length }) => length <= 100, 'Too many characters, please enter condensed exercise.'],
        required: "the type is a requirement"
      },
      name: {
        type: String,
        trim: true,
        validate: [({ length }) => length <= 100, 'Too many characters, please enter condensed name.'],
        required: "the name is a requirement"
      },
      duration: {
        type: Number,
        trim: true,
        required: "the duration is a requirement"
      },
      weight: {
        type: Number,
        trim: true
      },
      reps: {
        type: Number,
        trim: true
      },
      sets: {
        type: Number,
        trim: true
      },
      distance: {
        type: Number,
        trim: true
      }
    }
  ]
},
);

  
  
const Workout = mongoose.model("Workout", workoutSchema);


module.exports = Workout;