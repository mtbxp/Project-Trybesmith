import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { TUsers } from '../types';
import connection from './connection';

const insertUser = async (newUser: TUsers) => {
  const { username, vocation, level, password } = newUser;
  const [user] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );

  const result = {
    id: user.insertId,
    ...newUser,
  };

  return result;
};

const getByUserName = async (username: string): Promise<TUsers | undefined> => {
  const [rows] = await connection
    .execute<RowDataPacket[] & TUsers[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ?;',
    [username],
  );

  return rows[0];
};

export default {
  insertUser,
  getByUserName,
};