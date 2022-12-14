import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
}); // sua conexão NÃO deve ter o database, este deve ser especificado em cada query

export default connection;

// const mysql = require('mysql2/promise');

// const connection = mysql.createPool({
//   host: process.env.MYSQL_HOST,
//   port: process.env.MYSQL_PORT || 3306,
//   user: 'root',
//   password: 'password',
//   database: 'StoreManager',
// });

// module.exports = connection;
