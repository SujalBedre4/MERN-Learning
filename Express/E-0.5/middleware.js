// This is our MiddleWare Condition
module.exports = reqFilter = (req, resp, next) => {
    // Now, we are applying some conditions:
    if (!req.query.age) {
        resp.send('Please provide age');
    } else {
        next();
    }
}