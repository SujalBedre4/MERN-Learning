const { MongoClient } = require('mongodb')
const url = "mongodb://localhost:27017"

const client = new MongoClient(url)
const database = "Marc"

async function dbConnection() {
    let result = await client.connect();
    db = result.db(database)
    return db.collection('Products')

}
// module.exports = dbConnection() //Don't call here the functino, just directly pass it.
module.exports = dbConnection