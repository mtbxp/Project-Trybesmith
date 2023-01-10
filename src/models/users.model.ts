import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { User } from '../types';
import connection from './connection';

export default {
  login: async (user: User) => {
    const [[result]] = await connection.execute<RowDataPacket[]>(`
      SELECT * FROM Trybesmith.users
      WHERE username = ? AND password = ?
    `, [user.username, user.password]);

    return result;
  },
  
  create: async (user: User) => {
    const [result] = await connection.execute<ResultSetHeader>(`
      INSERT INTO Trybesmith.users (username, vocation, level, password)
        VALUES(?,?,?,?)
    `, [user.username, user.vocation, user.level, user.password]);

    return result;
  },
};