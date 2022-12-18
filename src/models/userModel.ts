import { ResultSetHeader } from 'mysql2';
import { Iuser } from '../types/index';
import connection from './connection';

export default async function insertUser(user: Iuser): Promise<void> {
  const { username, vocation, level, password } = user;  
  await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password]) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
}
