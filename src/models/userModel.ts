import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import IUser from '../interfaces/user.interface';

// eslint-disable-next-line import/prefer-default-export
export async function createUser({ username, vocation, level, password }: IUser): Promise<number> {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  return result.insertId;
}