import { ResultSetHeader } from 'mysql2/promise';
import { User } from '../interfaces';

import connection from './connection';

const insertNewUser = async (newUser: User): Promise<User> => {
  const { username, vocation, level, password } = newUser;
  const q = 'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?, ?, ?)';
  const result = await connection
    .execute<ResultSetHeader>(q, [username, vocation, level, password]);

  const [dataInserted] = result;
  const { insertId } = dataInserted;

  return { id: insertId, username };
};

export default insertNewUser;