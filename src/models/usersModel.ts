import { ResultSetHeader } from 'mysql2/promise';
import { TUser } from '../types';
import connection from './connection';

export async function insert(user: TUser): Promise<number> {
  const { username, vocation, level, password } = user;
  const [newUser] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  const { insertId: id } = newUser;

  return id;
}

export default insert;