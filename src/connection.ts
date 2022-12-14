import mysql from 'mysql2/promise';

import dotenv from 'dotenv';

dotenv.config();

export default mysql.createPool({
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
});