require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require("./routes/workoutRoutes");
const userRoutes = require("./routes/userRoutes");
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('front-end'));
app.use(express.json());
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes
);

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

