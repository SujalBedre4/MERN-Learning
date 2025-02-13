const dbConnection = require('./mongodb')

const insert = async () => {
    const db = await dbConnection()
    // Now, this one is for the single.
    // const result = await db.insertOne({ name: "Vallabh", age: "21", work: "Swami", place: "Vaikunth" })

    const result = await db.insertMany([{ name: "Vallabh", age: "21", work: "Swami", place: "Vaikunth" },
    { name: "Kanha", age: 4, work: "Fun", place: "Vrindavan" },
    ])
    // Whenever I tried to change somethings then it will automatically saves the changes.
    if (result.acknowledged) {

        console.log("Data inserted")
    }
}

insert()