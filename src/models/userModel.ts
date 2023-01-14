import { ResultSetHeader } from 'mysql2';
import connection from './connection';

import { IUser, UserCredential } from '../interfaces';

export async function create(user: UserCredential): Promise<IUser> {
  const { username, vocation, level, password } = user;
  const query = `INSERT INTO Trybesmith.users 
  (username, vocation, level, password) VALUES (?, ?, ?, ?)`;
  const values = [username, vocation, level, password];
  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;
  const newUser: IUser = { id, ...user };
  return newUser;
}

export async function getUsername(username: string): Promise<IUser | null> {
  const query = 'SELECT * FROM Trybesmith.users WHERE username = ?';
  const values = [username];
  const [data] = await connection.execute(query, values);
  const [user] = data as IUser[];
  return user || null;
}