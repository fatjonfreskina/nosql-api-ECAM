const express = require("express");
const router = express.Router();
const userModel = require('../models/userModel');
const { validate } = require("../models/workoutModel");

/*
    Routes:
    - validation route : 
    - get all users
    - 
*/

//Get all workouts
router.get('/user', (req, res) => {
    res.json('Hello user');
    //userModel.methods.validPassword('hello');
})

router.post('/user/signup', (req,res) =>{
    res.json('Hello signup');
})

router.get('/user/login', (req,res)=>{
    res.json('Hello login');
})

module.exports = router;