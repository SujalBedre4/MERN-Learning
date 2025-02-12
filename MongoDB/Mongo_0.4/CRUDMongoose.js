const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/Marc'

mongoose.connect(url);

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    brand: String,
});

const User = mongoose.model('Products', userSchema);

const SaveInDB = async () => {
    let data = new User({
        name: "ShriHari",
        aga: 1,
        email: "shrihari@gmail.com",
        brand: "Universe Builder"
    })

    let result = await data.save()

    console.log(result)
}


const updateInDB = async () => {
    // Here, we are upadting the data for the "m8"
    let data = await User.updateOne({ name: "m8" }, { $set: { brand: "Samsung" } })
    // Here, we don't need to save the data. 
    // let result = await data.save() 
    console.log(data)
}


const deleteInDB = async () => {
    let data = await User.deleteOne({ name: "m19" })
    // let result = await data.save()
    console.log(data)
}


const find = async () => {
    let data = await User.find({})
    console.log(data)
}
// SaveInDB()
// updateInDB()
// deleteInDB() 

find()