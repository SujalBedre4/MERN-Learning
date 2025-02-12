const express = require('express') //the const "express" is known as a different function
const path = require('path')
const app = express() //This one is known as the executed funcntion which is a "express()" 



// Here, we are adding the two path
const publicPath = path.join(__dirname, 'Compone')

// Here, we are using "use", and "use" is a middleware

app.get('', (_, resp) => {
    resp.sendFile(`${publicPath}/index.html`);
})

app.get('/about', (_, resp) => {

    resp.sendFile(`${publicPath}/about.html`)
})

app.get('/help', (_, resp) => {
    resp.sendFile(`${publicPath}/help.html`)
})

// If the particular page's URL is removed or not availabled:
app.get('*', (_, resp) => {
    resp.sendFile(`${publicPath}/404.html`)
})

app.listen(4500)