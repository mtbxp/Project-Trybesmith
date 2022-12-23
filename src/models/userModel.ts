import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { User, Login } from '../helpers/types';

async function create(user: User) {
  const { username, vocation, level, password } = user;
  await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?);',
    [username, vocation, level, password],
  );
}

async function getUser(user: Login): Promise<Login & []> {
  const { username, password } = user;
  const [result] = await connection.execute<RowDataPacket[] & Login & []>(`
    SELECT id, username FROM Trybesmith.users WHERE username = ? AND password = ?
  `, [username, password]);

  return result;
}

export default {
  create,
  getUser,
};
