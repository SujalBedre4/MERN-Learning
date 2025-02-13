const dbConnection = require('./mongodb')


const main = async () => {
    // console.log("Main")
    let data = await dbConnection()
    data = await data.find({}).toArray()
    console.warn(data)
}

main(); 