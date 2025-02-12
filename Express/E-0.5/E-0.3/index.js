const express = require('express')
const app = express()



app.set('view engine', 'ejs');

app.get('', (_, resp) => {
    const user = {
        name: "Murlidhar",
        email: "murlidharkanha@gmail.com",
        city: "Vaikunth",
        skills: ['Python Django', 'CS', 'C++', 'Java'],
    }
    resp.render('index', { user })
})

app.get('/login', (_, resp) => {
    resp.render('login')
})

app.listen(4500)


