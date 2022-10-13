const express = require('express')
const server = express()
const server_port = process.env.PORT || 3010;
const server_host =  '0.0.0.0';
const cors = require('cors')
const pizzaRouter = require('./db/api/pizza/pizza-router')
const toppingsRouter = require('./db/api/toppings/toppings-router')


server.use(express.json())
server.use(cors())
server.use('/api/pizza',pizzaRouter)
server.use('/api/toppings',toppingsRouter)

server.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen(server_port, server_host, () => {
  console.log('Listening on port %d', server_port)
})