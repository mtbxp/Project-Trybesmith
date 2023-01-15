import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { INewUser } from '../types/types';

export default async function addNew(user:INewUser) {
  const { username, vocation, level, password } = user;
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?);',
    [username, vocation, level, password], 
  );
  return { id, username };
}