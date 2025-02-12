const ht = require('http');
// ht.createServer().listen(4500);

// Instead of passing variables, we can even pass the full function inside for the calculation
// test(a,b){
// }

// Now, we are using "an Arrow", function for passing a data.
// Here, we are taking this because we want to store the "request" and gave a "response", according to that
// ht.createServer((req, resp) => {
//     resp.write("Hello thhis is Madara");
//     resp.end();
// }).listen(4500)

// Now, we are runnning our server for the HTML file:
function first(req, resp) {
    resp.write("<h1>Hello World this is Madara Uchiha </h1>")
    resp.end();
}

ht.createServer(first).listen(4500)