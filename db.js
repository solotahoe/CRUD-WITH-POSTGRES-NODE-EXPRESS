const path = require('path')
const Pool = require('pg').Pool;
require('dotenv').config({
    override:true,
    path: path.join(__dirname, 'development.env')
  });

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "students",
    password: "solo",
    port:"5432"
})

module.exports = pool;