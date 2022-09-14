const express = require('express')
const server = express()
const port = 3010
const cors = require('cors')

server.use(express.json())
server.use(cors())

const pizzaRouter = require('./db/api/pizza/pizza-router')
const toppingsRouter = require('./db/api/toppings/toppings-router')


server.use('/api/pizza',pizzaRouter)
server.use('/api/toppings',toppingsRouter)



server.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})