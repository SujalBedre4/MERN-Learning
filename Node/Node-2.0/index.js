const http = require('http')
// Now, here we are importing that data
const data = require('./data')
http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'application/json' })
    resp.write(JSON.stringify({ data }))
    resp.end(); //This is one necessary to execute a particualr API.
}).listen(5000, () => {
    console.log("Server is running on the localhost: http://localhost:5000")
})

