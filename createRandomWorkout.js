let workoutList = [
    "Bootycamp",
    "Total Body Reset",
    "Booties and Burpees",
    "Fierce Fest",
    "One More Rep",
    "Super Strength",
    "Don’t Stop Until You Drop",
    "Power Play",
    "Super Solid",
    "Way of Life",
    "Strong and Lean",
    "Black Eagle",
    "Super Strength",
    "Made of Muscle",
    "Power Lift",
    "Tough Luck",
    "Body Balance",
    "Power Spread",
    "Stable Feet",
    "Primal Fitness",
]

let names = [
    "Random Names",
    "Cleo Silva",
    "Benedict Christian",
    "Sami Garrison",
    "Savanna Obrien",
    "Cecily Haas",
    "Alma Dominguez",
    "Brooke Reyes",
    "Hasan English",
    "Kylie Jimenez",
    "Marley Boone",
    "Monica Harvey",
    "Bailey Dawson",
    "Kieron Curtis",
    "Aoife Ali",
    "Marissa Kramer",
    "Harriett Hammond",
    "Gertrude Mcdowell",
    "Gethin Mcmillan",
    "Harri Weiss",
    "Lexie Murray",
    "Alexander Keith",
    "Theodore Skinner",
    "Kezia Garner",
    "Kiara Rowe",
    "Albert Harrell",
    "Simeon Bennett",
    "Leslie Bush",
    "Arthur Buchanan",
    "Sonny Mcdonald",
    "Sinead Tucker",
    "Farrah Gill",
    "Haseeb Dalton",
    "Niamh Cain",
    "Marie Stanley",
    "Tabitha Sherman",
    "Walter Pollard",
    "Keisha Kaufman",
    "Megan Holland",
    "Elin Gilbert",
    "Eoin Colon",
    "Jensen Holden",
    "Nate Irwin",
    "Paige Watts",
    "Fraser Huffman",
    "Md Flores",
    "Inaya Gamble",
    "Karina Reese",
    "Azaan Sampson",
    "Aaryan Phillips",
    "Jakub Brock",
]

let exercises = [
    "Squat",
    "Leg press",
    "Leg extension",
    "Wall sit",
    "Deadlift",
    "Stiff-legged deadlift",
    "Leg curl",
    "Snatch",
    "CleanNJerk",
    "Bench press",
    "Jump squat",
    "Pistol squat",
    "Pull ups"
]

let modes = [
    "HIIT",
    "Total body",
    "Heavy weights",
    "Cardio",
    "Calistenichs"
]

let tips = [
    "Take a longer rest if needed",
    "Use a wider stance",
    "Bend your lower back",
    "Let knees pass over your toes",
    "Scream like a psychopath",
    "Listen to music",
    "Drink water",
    "Get a better night's sleep",
    "Preface your workout with carbs",
    "Swap stretching for a dynamic warmup"
]

let equipment = [
    "Adjustable bench",
    "Barbell stand",
    "Cable Crossover or Functional Trainer",
    "Dumbbells stand",
    "Decline Bench press",
    "Exercise ball",
    "Flat bench press",
    "Indoor Rower",
    "Incline bench press",
    "Lat Pulling Down",
    "LKey Dumbbells",
    "Leg Press Hack Squad hammer",
    "Leg Curl Extension",
    "Olympic bar",
    "Preacher Curl bench",
    "Rubber coated Premium weight",
    "Smith machine",
    "Weight plate stand",
    "Treadmill",
    "Gym bike",
    "Elliptical trainer",
    "Capsule pipe",
    "Machines with pulley",
    "Cable cross",
    "Functional Trainer",
    "Smith machine with a functional trainer",
    "Hack squat",
    "Hammer single station",
    "Plates",
    "Dumbbells"
]

const createRandomWorkout = function(){
    var randomName = names[Math.floor(Math.random()*names.length)];
    var randomWorkout = workoutList[Math.floor(Math.random()*workoutList.length)];
    var randomWorkoutName = (randomWorkout + " from " + randomName).toLocaleLowerCase();
    var randomMode = modes[Math.floor(Math.random()*modes.length)]
    var randomTip = tips[Math.floor(Math.random()*tips.length)];
    var randomEquipList = []
    var randomEquip;
    for(var i = 0; i < 3; i++){
        randomEquip = exercises[Math.floor(Math.random()*exercises.length)];
        randomEquipList.push(randomEquip)
    }
    var randomExeList = []
    var randomExe;
    for(var i = 0; i < 3; i++){
        randomExe = exercises[Math.floor(Math.random()*exercises.length)];
        randomExeList.push(randomExe)
    }


    randomWorkout = {

        name : randomWorkoutName,
        mode: randomMode,
        equipment: randomEquipList,
        exercises: randomExeList,
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: '',
        trainerTips: randomTip,
        workoutTime: Math.floor(Math.random() * 150) + 40
    }

    return randomWorkout;
}

//console.log(createRandomWorkout())

module.exports = {createRandomWorkout};