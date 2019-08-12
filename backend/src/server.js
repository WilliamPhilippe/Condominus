const express = require('express')
const bodyParser = require('body-parser')
// const routes = require('./routes')

const server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))

server.get('/', (req, res) => {
    res.send('Hello World')
})

// server.use(routes);
server.listen(3333)