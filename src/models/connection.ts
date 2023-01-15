// ./src/models/connection.ts
// É essencial que seu arquivo tenha o nome connection.ts e esteja no diretório src/models

import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
}); // sua conexão NÃO deve ter o database, este deve ser especificado em cada query

export default connection;
