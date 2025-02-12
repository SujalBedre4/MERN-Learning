const express = require('express')
require('./config')

const Product = require('./Product')

const app = express()

app.get("/find/:key", async (req, resp) => {
    const key = req.params.key;
    // let data = await Product.find({ brand: key }) //This is normal method to find the data from the database
    // Now, we are working with the "regex"
    let data = await Product.find({
        "$or": [
            { "name": { $regex: key } },
            { "brand": { $regex: key } },
            { "category": { $regex: key } }

        ]
    })
    resp.send(data)
})

app.listen(4500, (err) => {
    if (err) {
        console.error("Error occured", err)
    }
    else {
        console.log("Localhost is running on the 4500 port")
    }
})



// const express = require('express')
// require('./config')
// const Product = require('./Product')
// const app = express()

// app.use(express.json()) //This is used for taking the data from the Body and it will automatically convert it into the JSON file.
// app.post("/create", async (req, resp) => {
//     let data = new Product(req.body)
//     // Here, we are gettinng that data from the ""
//     resp.send("Done")
//     console.log(req.body)
//     // Now, saving the data inside the MongoDB database
//     let result = await data.save()
//     console.log(result)
// })

// app.get("/list", async (req, resp) => {
//     let data = await Product.find()
//     resp.send(data)
//     console.log(data)
// })

// app.delete("/delete/:_id", async (req, resp) => {
//     console.log(req.params)
//     let data = await Product.deleteOne(req.params)
//     resp.send("done")
// })

// app.put("/update/:_id", async (req, resp) => {

//     try {
//         const productId = req.params._id
//         const updateData = req.body

//         let data = await Product.findByIdAndUpdate(productId, updateData, { new: true })

//         if (data) {
//             let result = await data.save()
//             console.log(result)
//             resp.status(200).send("Product update successfully")
//         }
//         else {
//             res.status(404).send("Product not found")
//         }
//     } catch (error) {
//         console.error("Error updating products:", error)
//         res.status(500).send("Internal server error")
//     }
// })


// app.listen(4500, () => {
//     console.log("Port is running on the localhost 4500")
// })