const { MongoClient } = require('mongodb')
// Now, we are taking the path of the Path.
const url = "mongodb://localhost:27017"

// Now, we are passing the url to the MongoClient
const client = new MongoClient(url)
const database = "Marc"
// Function for GET data:
// function getData() {
// let result = client.connect();
// }

// The above one is a normal function. Even we have to handle an error.
// That's why we are using an error handle with an "async" keyword

async function getData() {
    try {
        let result = await client.connect();
        // Now, we are giving exact path of the Database in the MongoDB's. So, that it coonnects with it.
        db = result.db(database)
        // Now, we have connected the database. Now, we are connecting the "collections"
        let collection = db.collection('Products') //"Marc is name of the collection in the database of the "Project_0.1"
        let response = await collection.find({}).toArray()
        console.log(response)
    } catch (error) {
        console.error("An error occured", error)
    } finally {
        await client.close()
    }
}

getData().catch(console.error)




