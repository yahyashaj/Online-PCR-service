const mysql = require("mysql");
const dbconfig = require("../db-config/db.config");

const pool = mysql.createPool({
  host: dbconfig.HOST,
  user: dbconfig.USER,
  password: dbconfig.PASSWORD,
  database: dbconfig.DB,
  port: dbconfig.PORT,
  multipleStatements: true,
});

pool.query("select 1 + 1", (err, rows) => {
  if (err) throw err;
  console.log("Connected! , hello from db connect");
});

module.exports = pool;
