import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { NewUser, CreatedUser, DatabaseUser } from '../types/types';

export async function createUser(newUser: NewUser): Promise<CreatedUser> {
  const { username, vocation, level, password } = newUser;
  const queryString = `
  INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?);`;
  const valuesArray = [username, vocation, level, password];
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(queryString, valuesArray);
  return { id, username };
}

export async function getUserByUsername(username: string): Promise<DatabaseUser> {
  const queryString = 'SELECT * FROM Trybesmith.users WHERE username = ?';
  const [[user]] = await connection.execute<RowDataPacket[]>(queryString, [username]);
  return user as DatabaseUser;
}