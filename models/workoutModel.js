// TODO : equipment: Array elements lowercase

const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    name: {
        required: [true, "Can't be blank"],
        type: String,
        unique: true,
        index: true
    },
    mode: {
        required: true,
        type: String
    },
    equipment: Array,
    exercises: Array,
    createdAt: String,
    updatedAt: String,
    trainerTips: Array,
    workoutTime: Number
})

module.exports = mongoose.model('workouts', workoutSchema)