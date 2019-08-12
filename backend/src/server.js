const express = require('express')
const bodyParser = require('body-parser')

const server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))

server.get('/', (req, res) => {
    res.send('Hello World')
})

server.listen(3333)