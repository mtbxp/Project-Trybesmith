import { ResultSetHeader } from 'mysql2/promise';
import { TPessoa } from '../interfaces/types';
import connection from './connection';

export default async function insertUsers(pessoa:TPessoa): Promise<TPessoa> {
  const { username, vocation, level, password } = pessoa;
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUE (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  const returnPessoa = { id: insertId, ...pessoa };
  return returnPessoa as TPessoa;
}