import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { User } from '../interfaces/index';

export async function getAll() {
  const [rows] = await connection.execute('SELECT * FROM users');
  return rows;
}

export async function userRegistrationModel(user: User):
Promise<ResultSetHeader> {
  const { username, vocation, level, password } = user;
  const [users] = await connection
    .execute(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );

  return users as ResultSetHeader;
}
