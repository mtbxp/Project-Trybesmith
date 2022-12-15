import { ResultSetHeader, RowDataPacket } from 'mysql2';

import connection from './connection';
import { User, UserInput } from '../types';

async function createUser({ level, password, username, vocation }: UserInput): Promise<number> {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUE (?, ?, ?, ?);',
    [username, vocation, level, password],
  );

  return insertId;
}

async function getUserByUsername(username: string): Promise<User> {
  const [[user]] = await connection.execute<(
  RowDataPacket & User)[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ?',
    [username],
    );

  return user;
}

export { createUser, getUserByUsername };
