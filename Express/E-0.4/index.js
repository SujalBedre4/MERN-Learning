const express = require('express')
const app = express()

app.set('view engine', 'ejs')

// Now, we are adding a middleware here:
// Here, we are getting 3 input fields

const reqFilter = (req, resp, next) => {
    // Now, we are applying some conditions:
    if (!req.query.age) {
        resp.send('Please provide age');
    }else{

        next();
    }
}
app.use(reqFilter)
app.get('/', (req, resp) => {
    resp.send('index')
})

app.listen(4500)