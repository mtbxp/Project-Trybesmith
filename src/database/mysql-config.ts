import { createPool } from 'mysql2/promise';
import * as dotenv from 'dotenv';

dotenv.config();

const connection = createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  port: 3306,
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '123456',
  database: process.env.MYSQL_DATABASE || 'TrybeSmith',
});

export default connection;