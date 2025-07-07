
const mysql = require('mysql2');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'phxenics:D123!',
  database: 'my_sql',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
module.exports = pool.promise();