const mysql = require('mysql');

function connectionFactory() {
  return mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'nguyen',
    password: process.env.DB_PASSWORD || '123456',
    database: process.env.DB_NAME || 'web',
  });
}

module.exports = () => connectionFactory;
