import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { User } from '../types/users.types';
import connection from './connection';

// RowDataPacket => SELECT;
// ResultSetHeader => POST, DELETE, UPDATE;
// OKPacket => SET;

const getByUser = async (user:string): Promise<User | undefined> => {
  const [result] = await connection.execute<RowDataPacket[] & User[]>(`
  SELECT * FROM Trybesmith.users WHERE  username = ?`, [user]);
  return result[0];
};

const createUser = async (users: User): Promise<User> => {
  const { username, vocation, level, password } = users;
  const [{ affectedRows }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUE(?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  const result = { row: affectedRows, ...users };
  return result;
};

export default {
  getByUser,
  createUser,
};
