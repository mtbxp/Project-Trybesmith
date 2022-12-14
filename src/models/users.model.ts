import { ResultSetHeader } from 'mysql2';

import connection from './connection';
import { UserInput } from '../types';

async function createUser({ level, password, username, vocation }: UserInput): Promise<number> {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUE (?, ?, ?, ?);',
    [username, vocation, level, password],
  );

  return insertId;
}

export { createUser };
