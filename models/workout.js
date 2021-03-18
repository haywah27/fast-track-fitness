const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    trim: true,
    default: Date.now,
    required: true
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        validate: [({ length }) => length <= 50, 'Too many characters, please enter condensed exercise.'],
        required: true
      },
      name: {
        type: String,
        trim: true,
        validate: [({ length }) => length <= 50, 'Too many characters, please enter condensed name.'],
        required: true
      },
      duration: {
        type: Number,
        trim: true,
        required: true
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
});
  
  
const Workout = mongoose.model("Workout", workoutSchema);


module.exports = Workout;