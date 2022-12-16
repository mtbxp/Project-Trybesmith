import { ResultSetHeader } from 'mysql2/promise';
import { TPessoa } from '../interfaces/types';
import connection from './connection';

export async function insertUsers(pessoa:TPessoa): Promise<TPessoa> {
  const { username, vocation, level, password } = pessoa;
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUE (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  const returnPessoa = { id: insertId, ...pessoa };
  return returnPessoa as TPessoa;
}

export async function getUserByEmail(username: string): Promise<TPessoa[]> {
  const [result] = await connection.execute(
    'SELECT * FROM Trybesmith.users WHERE username = ?',
    [username],
  );

  return result as TPessoa[];
}