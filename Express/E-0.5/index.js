const express = require('express')
const app = express()

// Now, we are importing the middleware.js file:


const reqFilter = require('./middleware')

// Now, we are creating an instance for the route:
const route = express.Router()
route.use(reqFilter)

app.get('/', (req, resp) => {
    resp.send("Welcome");
})

app.get('/home', (req, resp) => {
    resp.send('Welcome to home')
})

route.get('/contact', reqFilter, (req, resp) => {
    resp.send("Welcome tp contact");
})
// If we want to apply the middle-ware then we are using the - "route" instead of the app.
route.get('/contact', reqFilter, (req, resp) => {
    resp.send("Welcome tp contact");
})
// after adding the "route" instead of "app", we have to add the given belowo line:
app.use('/', route);


app.listen(4500) 