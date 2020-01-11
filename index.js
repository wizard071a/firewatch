const http = require('http')
const express = require('express')

const port = process.env.APP_PORT
console.log('start')

const app = express();
const server = http.createServer(app);

app.listen(port, () => {
    console.log(`API listening on port ${port}!`)
})

app.get('/', function (req, res) {
    res.send('Twillio working!');
});

app.use(require('./router').router())

console.log('end')
