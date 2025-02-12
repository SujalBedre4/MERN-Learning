const mongoose = require('mongoose')
// Importing the "moongose"
const url = "mongodb://localhost:27017/Marc"
// Here, we are providing the databases's name.
const main = async () => {
    await mongoose.connect(url)
    // Here, we are making an Schema:
    const ProductSchema = new mongoose.Schema( //Here, we are making an object
        {
            name: String
        }
    )
    const ProductsModel = mongoose.model('Products', ProductSchema) //Here, we are passing the collection name and rules
    let data = new ProductsModel({ name: "m19" })
    let result = await data.save()
    console.log(result)
}


main()