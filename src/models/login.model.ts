import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces/users';
import connection from './connection';

export default async function getByName(username: IUser, password: IUser): Promise<IUser[] | null> {
  const query = `SELECT id, username, password FROM Trybesmith.users 
  WHERE username = ? AND password = ?`;
  const [user] = await connection.execute<ResultSetHeader & IUser[]>(query, [username, password]);
  return user as IUser[] | null;
}
