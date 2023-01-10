import dotenv from 'dotenv';
import mysql, { Pool } from 'mysql2/promise';

dotenv.config();

const connection:Pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
}); // sua conexão NÃO deve ter o database, este deve ser especificado em cada query

export default connection;