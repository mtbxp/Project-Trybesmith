import { ResultSetHeader } from 'mysql2/promise';
import { User } from '../types';
import connection from './connection';

const createUser = async (user: User): Promise<User> => {
  const { username, vocation, level, password } = user;
  const result = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );

  const [{ insertId }] = result;
  const newUser = { id: insertId, ...user };
  return newUser;
};

export default {
  createUser,
};