const { MongoClient } = require("mongodb");
const uri = "<connection-string>"

const client = new MongoClient(uri);
async function run() {
    try {
        await client.connect();
        const db = client.db("crossfit");
        const coll = db.collection("workouts");
        const result = await coll.deleteMany({}) // This deletes all the documents
    } finally {
        await client.close();
    }
}
run().catch(console.dir);