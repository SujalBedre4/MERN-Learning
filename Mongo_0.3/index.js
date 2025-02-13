const exp = require('express')

const dbConnection = require('./mongodb')

const app = exp()
const mongodb = require('mongodb')

app.use(exp.json())

app.get('/', async (req, resp) => {
    let data = await dbConnection()
    data = await data.find().toArray()
    console.log(data)
    resp.send({ data })
})

app.post('/', async (req, resp) => {
    try {
        const collection = await dbConnection();
        const result = await collection.insertOne(req.body);
        resp.status(201).send(result);
    } catch (error) {
        console.error('Error inserting data:', error);
        resp.status(500).send('Internal Server Error: ' + error.message);
    }
});

app.put("/", async (req, resp) => {
    let data = await dbConnection()
    let result = await data.updateOne(
        { name: req.params.name },
        { $set: req.body }
    )
    resp.send("Result updated")
})

app.delete("/:id", async (req, resp) => {
    let data = await dbConnection()
    let result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) })
    console.log(req.params.id)
    resp.send(result)
})

app.listen(4500, (err) => {
    console.log("It's running on the localhost 4500")
})
