const {Client} = require('pg')

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: process.env.PORT,
    password: process.env.PASSWORD,
    database: 'postgres'

})

client.connect()

