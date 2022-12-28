import { ResultSetHeader } from 'mysql2/promise';
import { Iuser, IuserSafe } from '../interfaces';
import connection from './connection';

export default async function createUser(user: Iuser): Promise<IuserSafe> {
  const { username, password, level, vocation } = user;

  const [insertUser] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, password, level, vocation) VALUES (?,?,?,?)',
    [username, password, level, vocation],
  );
  
  return { id: insertUser.insertId, username, level, vocation };
}