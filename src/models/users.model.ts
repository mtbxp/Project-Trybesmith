import { ResultSetHeader } from 'mysql2';
import { NewUser } from '../types';
import connection from './connection';

export default {
  insert: async ({ username, vocation, level, password }: NewUser): Promise<number> => {
    const [{ insertId }] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users(userName, vocation, level, password) VALUES(?, ?, ?, ?)',
      [username, vocation, level, password],
    );

    return insertId;
  },
};