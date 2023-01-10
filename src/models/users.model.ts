import { ResultSetHeader } from 'mysql2';
import { User } from '../types';
import connection from './connection';

export default {
  create: async (user: User) => {
    const [result] = await connection.execute<ResultSetHeader>(`
      INSERT INTO Trybesmith.users (username, vocation, level, password)
        VALUES(?,?,?,?)
    `, [user.username, user.vocation, user.level, user.password]);

    return result;
  },
};