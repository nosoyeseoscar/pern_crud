const {Pool} = require('pg')
const {db} = require('./config')

const pool = new Pool({
    user: db.user,
    password: db.password,
    host: db.host,
    port: db.port,
    database: db.name
})

module.exports = pool