const { Pool } = require("pg");
const config = require("./config");

const pool = new Pool({
  user: config.USER,
  host: config.HOST,
  database: config.DATABASE_NAME,
  password: config.PASSWORD,
  port: config.HOST,
});

module.exports = { pool };
