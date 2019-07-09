const express = require('express');
const postsRouter = require('./posts/posts-router')


const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hello World!!!')
})

server.use('api/posts', postsRouter)


server.listen(7000, () => console.log('Server running on port http://localhost:7000'));
