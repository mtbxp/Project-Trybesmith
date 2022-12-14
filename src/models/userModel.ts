import { ResultSetHeader } from 'mysql2';
import { Login, User } from '../interfaces';
import connection from './connection';

export default class UserModel {
  create = async ({ username, vocation, level, password }: User) => {
    const [{ insertId }] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );

    return insertId;
  };

  login = async ({ username }: Login) => {
    const [user] = await connection.execute<ResultSetHeader>(
      'SELECT * FROM Trybesmith.users where username = ?',
      [username],
    );

    return user || null;
  };
}