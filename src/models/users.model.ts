import { ResultSetHeader, RowDataPacket } from 'mysql2';
import User from '../types/User';
import connection from './connection';

const registerUser = async ({ username, vocation, level, password }: User) => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES(?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  return insertId;
};

const getUsers = async (): Promise<User[]> => {
  const [result] = await connection
    .execute<RowDataPacket[] & User[]>('SELECT * FROM Trybesmith.users');

  return result;
};

export default {
  registerUser,
  getUsers,
};