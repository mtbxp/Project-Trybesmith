import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { UserCredentials } from '../interfaces/user.interface';

export async function create(user:UserCredentials) {
  const { username, vocation, level, password } = user;
  const query = `INSERT INTO Trybesmith.users (username, vocation, level, password)
  VALUES(?, ?, ?, ?)`;
  const values = [username, vocation, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  return { id: result.insertId, username, vocation, level, password };
}