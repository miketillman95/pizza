const express = require('express')
const server = express()
const port = 3010
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

server.listen(process.env.PORT, port, () => {
  console.log(process.env.PORT || `Example app listening on port ${port}`)
})