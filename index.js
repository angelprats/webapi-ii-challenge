const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const postsRouter = require('./posts/posts-router')


const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hello World!!!')
})

server.use('api/posts', postsRouter)



const port = process.env.PORT || 8000;
server.listen(port, () => {
    console.log(`\n*** Server running on port http://localhost:${port} ***\n`)
});
