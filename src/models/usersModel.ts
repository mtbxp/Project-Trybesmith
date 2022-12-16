import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { TUser } from '../types';
import connection from './connection';

export async function insert(user: TUser): Promise<TUser[]> {
  const { username, vocation, level, password } = user;
  await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  const [posts] = await connection
    .execute<RowDataPacket[]>(
    'SELECT id, username FROM Trybesmith.users WHERE username = ?', 
    [username],
  );
  return posts as TUser[];
}

export default insert;