import { ResultSetHeader } from 'mysql2/promise';
import { TUser } from '../types';

import connection from './connection';

export async function create(user: TUser):Promise<TUser> {
  await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, password, level, vocation) VALUE (?, ?, ?, ?)',
    [...Object.values(user)],
  );

  return user;
}

export function getAll() {

}