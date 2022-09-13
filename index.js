const express = require('express')
const server = express()
const port = 3010

server.use(express.json())


server.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})