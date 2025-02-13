const dbConnection = require('./mongodb')

const deleteData = async () => {
    // console.log("function coal")
    let data = await dbConnection()
    // console.warn(data)
    let result = await data.deleteMany({ name: "Nityananda" })
    console.warn(result)
    if(result.acknowledged){
        console.log("Done")
    }
}

deleteData()