import { ResultSetHeader } from 'mysql2/promise';
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

export default {
  insertUser,
};