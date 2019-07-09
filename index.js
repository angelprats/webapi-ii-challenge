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

server.post('/api/posts/:id/comments', (req, res) => {
const id = req.params.comments;
const comment = req.body;
db.insertComment()
.then(post => {
    if(post) {
    if(!comment.title || !comment.contents) {
db.insertComment(id, comment)
            .then(updated => res.status(200).json(updated))
            .catch(err => res.status(500).json({ error: 'There was an error while saving the comment to the database"'}))
        }
        else {
            res.status(400).json({ errorMessage: 'Please provide text for the comment.'})
        }
    }
    else {
        res.status(404).json({ message: 'The post with the specified ID does not exist.' })
    }
    })
    .catch(err => res.status(500).json)({ error: 'There was an error while saving the comment to the database' })
})


server.get('api/posts', (req, res) => {
    db.find()
    .then(post => res.status(200).json(post))
    .catch(err => res.status(500).json({ error: 'The posts information could not be retrieved.' }))
})

server.get('/api/posts/:id', (req, res) => {
    db.findById(id)
    .then(posts => res.status(200).json(posts))
    .catch(err => res.status(500).json({ error: 'The post information could not be retrieved.' }))
})

server.delete('/api/users/:id', (req, res) => {
    const id = req.params.id;
    db.remove(id)
    .then(users => {
        if(users) {
            res.status(200).end()
        }
        else {
            res.status(404).json({error: 'The user with the specified ID does not exist' })
        }
    })
    .catch(err => res.status(500).json({ error: 'The user could not be removed' }))
})

server.listen(7000, () => console.log('express server running on port 7000'));
