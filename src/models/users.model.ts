import { ResultSetHeader } from 'mysql2';
import User from '../types/User';
import connection from './connection';

const registerUser = async ({ username, vocation, level, password }: User) => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES(?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  return result;
};

const getAllUsers = async (): Promise<User[]> => {
  const [user] = await connection.execute('SELECT * FROM Trybesmith.users');
  return user as User[];
};

export default {
  registerUser,
  getAllUsers,
};
