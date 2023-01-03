import { ResultSetHeader } from 'mysql2';
import { NewUser, User } from '../types';
import connection from './connection';

export default {
  insert: async ({ username, vocation, level, password }: NewUser): Promise<number> => {
    const [{ insertId }] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users(userName, vocation, level, password) VALUES(?, ?, ?, ?)',
      [username, vocation, level, password],
    );

    return insertId;
  },

  findByName: async (username: string): Promise<User> => {
    const [[user]] = await connection.execute<User[] & ResultSetHeader>(
      'SELECT * FROM Trybesmith.users WHERE username = ?',
      [username],
    );

    return user;
  },
};