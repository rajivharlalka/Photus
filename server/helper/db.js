const { hash } = require("../utils/hash");
const { pool } = require("../utils/pool");

function updateTable(long_url) {
  const code = hash(long_url);
  const sql = "insert into url_links(code,url) values ($1,$2)";
  
}

module.exports = { updateTable };
