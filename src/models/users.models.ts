import { ResultSetHeader } from 'mysql2/promise';
import { UserReq } from '../interfaces/users.interfaces';
import connection from './connection';

export async function postUser(user: UserReq): Promise<number> {
  const SQL = 'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)';
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(SQL, [user.username, user.vocation, user.level, user.password]);
  console.log(insertId);
  return insertId;
}
  
export async function getUsers() {
  return null;
}
