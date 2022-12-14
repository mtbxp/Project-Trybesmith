import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUser } from '../interfaces/users';

export default async function createNewUser(user: IUser) :Promise<IUser> {
  const { username, vocation, level, password } = user;
  const query = 'INSERT INTO Trybesmith.users(username,vocation,level,password ) VALUES(?,?,?,?)';
  const newUser = await connection.execute< ResultSetHeader & IUser>(
    query, 
    [username, vocation, level, password],
  );
  const [dataInserted] = newUser;
  const { insertId } = dataInserted;
  return { id: insertId, ...user };
}
