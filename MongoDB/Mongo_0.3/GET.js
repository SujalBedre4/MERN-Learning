const dbConnection = require('./mongodb');

async function getData(resp) {
    try {
        const client = await dbConnection();
        const data = await client.find().toArray();
        console.log(data);
        resp.send({ data });
    } catch (error) {
        console.error('Error fetching data:', error);
        resp.status(500).send('Internal Server Error');
    }
}

module.exports = getData;
