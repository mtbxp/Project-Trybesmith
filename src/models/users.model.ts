import { ResultSetHeader } from 'mysql2';
import User from '../types/User';
import connection from './connection';

const registerUser = async ({ username, vocation, level, password }: User) => {
  await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES(?, ?, ?, ?)',
    [username, vocation, level, password],
  );
};

export default {
  registerUser,
};