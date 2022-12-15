# Crossfit-api-mongodb

## Getting Started

Follow these instructions to run the application in your machine

### Prerequisites

Mandatory:

- [Node.js](https://nodejs.org/en/download/)
- Atlas account with a cluster: [follow this](https://www.mongodb.com/docs/atlas/getting-started/?_ga=2.167352636.347364432.1670771066-792994458.1665470639)

Plus:

- [Postman](https://www.postman.com)

### Installation

1. Open a terminal and run `git clone https://github.com/fatjonfreskina/Crossfit-api-mongodb.git && cd Crossfit-api-mongodb` to clone the repo and enter it
2. Open the `.env` file and modify the connection string: `DATABASE_URL = mongodb+srv://<username>:<password>@<cluster-name>.odldlhz.mongodb.net/crossfit` with your information.
3. Install NPM packages with `npm install`
4. Populate the database with fake data with `cd utils && node populateDatabase.js`
5. Run the application with `npm start`

## Usage

### Browser

The server is listening to port 3000 so navigate to `http://localhost:3000`.

### Postman

- GET `http://localhost:3000/api/workouts/getAllWorkouts` to get all the workouts
- GET `http://localhost:3000/api/workouts/getOne?name=<workout-name>` to get a specific workout
- GET `http://localhost:3000/api/workouts/getWorkoutByTime?time=<max-time>` to get all workouts that last less than the specified time
- POST `http://localhost:3000/api/workouts/postWorkout` with JSON body:

```js
{
    "name": "<Workout name>",
    "mode": "<mode>",
    "equipment": [
        "<test>"
    ],
    "exercises": [
        "<test>"
    ],
    "trainerTips": [
        "<test>"
    ],
    "workoutTime": <integer-test>
}
```

- POST `http://localhost:3000/api/workouts/update` with JSON body:

```js
{
    "name": "<Workout name>",
    "mode": "<new-mode>",
    "equipment": [
        "<new-test>"
    ],
    "exercises": [
        "<new-test>"
    ],
    "trainerTips": [
        "<new-test>"
    ],
    "workoutTime": <new-integer-test>
}
```

- GET `http://localhost:3000/api/workouts/delete/?name=<workout-name` to delete a workout
