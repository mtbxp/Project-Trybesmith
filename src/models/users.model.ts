import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import User from '../interfaces/user.interface';

const registerUser = async (user: User): Promise<User> => {
  const { username, vocation, level, password } = user;
  const result = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)',
    [username, vocation, level, password],
  );
  const [dataInserted] = result;
  const { insertId } = dataInserted;
  return { id: insertId, ...user };
};

export default {
  registerUser,
};