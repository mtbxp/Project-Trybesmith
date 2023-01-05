import { RowDataPacket } from 'mysql2/promise';
import ILogin from '../Interfaces/login.interface';
import connection from './connection';

export default async function getUser(username: string, password: string): Promise<ILogin> {
  const sql = 'SELECT * FROM Trybesmith.users WHERE username = ? And password = ?';

  const [rows] = await connection.execute<RowDataPacket[] & ILogin[]>(sql, [username, password]);
  return rows[0];
}