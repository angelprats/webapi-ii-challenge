const express = require('express');

const server = express();

const db = require('./data/db');

server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hello World!!!')
})

server.post('/api/posts', (req, res) => {
    const apiInfo = req.body;
    if(!apiInfo.title || !apiInfo.contents) {
        res.status(400).json({ errorMessage: "Please provide title and contents for the post." })
    }
    else {
        db.insert(apiInfo)
        .then(post => res.status(201).json(post))
        .catch(err => res.status(500).json({ error: "There was an error while saving the post to the database"}))
    }
})


server.listen(7000, () => console.log('express server running on port 7000'));
  