require('dotenv').config()
const { MongoClient } = require("mongodb");
const mongoString = process.env.DATABASE_URL;

const client = new MongoClient(mongoString);
async function run() {
    try {
        await client.connect();
        const db = client.db("crossfit");
        const coll = db.collection("workouts");
        const result = await coll.deleteMany({}) // This deletes all the documents
        console.log("Cleared the database successfully")
    } finally {
        await client.close();
    }
}
run().catch(console.dir);