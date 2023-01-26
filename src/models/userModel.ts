import { ResultSetHeader, RowDataPacket } from 'mysql2';
import User from '../types/User';
import connection from './connection';

const addUser = async ({ username, vocation, level, password }: User) => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  return result;
};

const getByUsername = async (username: string, password: string) => {
  const [result] = await connection.execute(
    'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?',
    [username, password],
  );
  return result as RowDataPacket[];
};
export default {
  addUser,
  getByUsername,
};