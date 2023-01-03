import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { TUser } from '../types';

async function createUser(
  username: string,
  vocation: string,
  level: number,
  password: string,
): Promise<TUser> {
  const query = `INSERT INTO Trybesmith.users
  (username, vocation, level, password)
  VALUES (?, ?, ?, ?)`;
  const values = [username, vocation, level, password];

  const [createdUser] = await connection
    .execute<ResultSetHeader & TUser>(query, values);

  return {
    id: createdUser.insertId,
    username,
    vocation,
    level, 
  };
}

export default {
  createUser,
};