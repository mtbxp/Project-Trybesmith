import { ResultSetHeader } from 'mysql2';
import User from '../types/User';
import connection from './connection';

const registerUser = async ({ username, vocation, level, password }: User) => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );

  return {
    id: result.insertId,
    username,
    vocation,
    level,
    password,
  };
};

export default {
  registerUser,
};