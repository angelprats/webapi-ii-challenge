const express = require('express');

const server = express();

const db = require('./data/db');

server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hello World!!!')
})

server.listen(7000, () => console.log('express server running on port 7000'));
