const express = require('express')
const app = express();

app.get('/', (req, resp) => {
    console.log("The data from the user is the: ", req.query.name);
    resp.send(`<h1>Welcome</h1> ${req.query.name} <a href="/about"> About </a> <br> <a href="/help"> Help </a> `)
})

app.get('/about', (req, resp) => {
    // Now, we are routing the pages from one page to another:
    resp.send(`'<input type="text placeholder="Username"/> <button> Click me </button>' <a href="/">Click me </a>`);
})

app.get('/help', (req, resp) => {
    // resp.send('Hello, this is Help Page');
    // Here, we are rendering the JSON data:
    resp.send(
        // Now, for multiple user:
        [{ name: "Sunny", email: "sunnyleone@gmail.com" },
        { name: "Keren", email: "kerenhackill@gmail.com" },
        { name: "Sasha gray", email: "sashagray@gmail.com" },
        ],
    )
})
app.listen(4500, () => {
    console.log('Server is running on port 4500')
})