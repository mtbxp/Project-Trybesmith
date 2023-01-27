import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

// ANTES DE INICIAR O NPM, INICIAR O SQL COM O COMANDO sudo service mysql start

// RowDataPacket => SELECT
// ResultSetHeader => INSERT, DELETE, UPDATE
// OkPacket => SET(protocol_041) ----- MELHOR USAR O RESULTSETHEADER

dotenv.config();

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
}); // sua conexão NÃO deve ter o database, este deve ser especificado em cada query

export default connection;
