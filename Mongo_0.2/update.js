const dbConnection = require('./mongodb')

const update = async () => {
    let data = await dbConnection();
    let result = await data.updateMany({ name:"Vallabh" }, { $set: { name: "Nityananda" } })
    console.warn(result)
}

update()