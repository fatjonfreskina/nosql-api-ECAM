const { MongoClient } = require("mongodb");
const {createRandomWorkout} = require('./createRandomWorkout');

const uri = "<connection-string>"

const client = new MongoClient(uri);
async function run() {
    try {

        await client.connect();

        const db = client.db("crossfit");
        const coll = db.collection("workouts");

        for (var i = 0; i < 100; i++) {
            const doc = createRandomWorkout();
            try{
                const result = await coll.insertOne(doc);
            console.log(
                `A document was inserted with the _id: ${result.insertedId}`,
            );
            } catch(err){
                console.log("Dup key error")
            }
        }
    } finally {
        await client.close();
    }
}
run().catch(console.dir);