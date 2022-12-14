const express = require("express");
const router = express.Router();
const userModel = require('../models/userModel');
const { validate } = require("../models/workoutModel");

//Get all workouts
router.get('/getUser', async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json(users)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/postUser', async (req,res) =>{
    res.json('Hello signup');
    const newUser = new userModel({
        username: req.body.username,
        email: req.body.email
    })
    const dataToSave = await newUser.save()
    res.status(200).json(dataToSave);
})

router.get('/user/login', (req,res)=>{
    res.json('Hello login');
})

module.exports = router;