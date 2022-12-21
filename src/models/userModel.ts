import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { User } from '../types/index';
import connection from './connection';

export async function getAll(): Promise<User[]> {
  const [rows] = await connection.execute<RowDataPacket[] & User[]>('SELECT * FROM users');

  return rows;
}

export async function insertUser({ username, vocation, level, password }: User) {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  return result;
}

export async function getName({ username, password }: User): Promise<User[]> {
  const [user] = await connection.execute<RowDataPacket[] & User[]>(
    'SELECT * FROM Trybesmith.users WHERE username = (?) AND password = (?)',
    [username, password],
  );
  return user;
}
