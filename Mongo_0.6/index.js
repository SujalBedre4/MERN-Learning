const express = require('express')
const multer = require('multer')

require('./config')

const Product = require('./product')

const app = express()

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, files, cb) {
            cb(null, "uploads") //"uploads" -> It is a destination directory
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
        }
    })
    //Here, we are defininng the should we have to upload the - "single" file or "multiple" file at a time
}).single("user_file") //Here, we are definin the parameter of the function 

app.post("/upload",upload, async (req, resp) => {
    resp.send("File uploaded").status(200)
})


app.listen(4500, (err) => {
    if (err) {
        console.error("Error occurred", err)
    }
    else {
        console.log("Site is running on the 4500 port")
    }
})