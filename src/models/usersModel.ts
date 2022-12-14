import { ResultSetHeader } from 'mysql2/promise';
import { TUser } from '../types';
import connection from './connection';

export async function insert(user: TUser): Promise<void> {
  const { username, vocation, level, password } = user;
  await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
}

export default insert;