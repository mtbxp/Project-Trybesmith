import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { User } from '../types/index';
import connection from './connection';

export async function getAll(): Promise<User[]> {
  const [rows] = await connection.execute<RowDataPacket[] & User[]>('SELECT * FROM users');

  return rows;
}

export async function insertUser({ username, vocation, level, password }: User) {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password]) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  return result;
}

/* export async function getName(username: string): Promise<UserAndPassword> {
  const [[user]] = await connection
    .execute<RowDataPacket[]>(`SELECT * FROM Trybesmith.users 
    WHERE username = ?`, [username]);
  return user;
} */
