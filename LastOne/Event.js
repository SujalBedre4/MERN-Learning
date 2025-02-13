const express = require('express')

// Here, we are taking some capital letter's "EventEmitter", this is because it's an object and it's a function

const EventEmitter = require('events')


const app = express()
let count = 0;
// Now, we want to count that how many API's are inside in my project. So, that's why we are making an event
const event = new EventEmitter()

event.on("CountAPI", () => {
    count++;
    console.log(`Event called ${count}`)
})

app.get("/", async (req, resp) => {
    resp.send("Main API")
    event.emit("CountAPI")
})

app.get("/search", async (req, resp) => {
    resp.send("Search API")
    event.emit("CountAPI")

})

app.get("/module", async (req, resp) => {
    resp.send("Module's API")
    event.emit("CountAPI")

})

app.listen(4500, (err) => {
    if (err) {
        console.error("Error occurred", err)
    }
    else {
        console.log("Site runningg on the PORT 4500")
    }
})