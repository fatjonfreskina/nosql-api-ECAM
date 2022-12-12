const express = require("express");
const router = express.Router();
const workoutModel = require('../models/workoutModel');

router.get('/getAllWorkouts', async (req, res) => {
    try {
        const isAlreadyInDb = await workoutModel.find();
        res.status(200).json(isAlreadyInDb)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/getOne', async (req, res) => {
    const filter = { name: req.query.name };
    try {
        const isAlreadyInDb = await workoutModel.findOne(filter)
        if (isAlreadyInDb) {
            res.json(isAlreadyInDb)
        } else {
            res.status(400).json({ message: 'Cannot find workout with name: ' + req.query.name })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/getWorkoutByTime', async (req, res) => {
    try {
        const time = parseInt(req.query.time);
        const isAlreadyInDb = await workoutModel.find().where('workoutTime').lt(time + 1);
        if (isAlreadyInDb.length > 0) {
            res.json(isAlreadyInDb);
        } else {
            res.status(404).json({ message: 'Found no workouts lasting less than ' + time + ' minutes' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/postWorkout', async (req, res) => {
    const newWorkout = new workoutModel({
        name: req.body.name,
        mode: req.body.mode,
        equipment: req.body.equipment,
        exercises: req.body.exercises,
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        trainerTips: req.body.trainerTips,
        workoutTime: req.body.workoutTime
    })

    try {
        const isAlreadyInDb = await workoutModel.findOne({ name: req.body.name })

        if (!isAlreadyInDb) {
            const dataToSave = await newWorkout.save();
            res.status(200).json(dataToSave)
        } else {
            res.status(422).json({ message: "Workout with this name already in database. Please provide another name" })
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.post('/update', async (req, res) => {

    const filter = { name: req.body.name };
    try {
        const isAlreadyInDb = await workoutModel.findOne(filter)
        if (isAlreadyInDb) {
            const updatedData = req.body;
            updatedData["updatedAt"] = new Date().toLocaleString("en-GB", { timeZone: "UTC" });
            const options = { new: true };
            const result = await workoutModel.findOneAndUpdate(filter, updatedData, options)
            res.send(result)
        } else {
            res.status(422).json({ message: "Workout with this name is not in database. Please provide an existing name" })
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


router.get('/delete', async (req, res) => {
    try {
        const isAlreadyInDb = await workoutModel.findOneAndDelete({ name: req.query.name })
        if (isAlreadyInDb) {
            res.send(`Workout with name ${isAlreadyInDb.name} and id ${isAlreadyInDb.id} has been deleted..`)
        } else {
            res.status(422).json({ message: "Workout with this name is not in database. Please provide an existing name" })
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }

})

module.exports = router;