import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import IUser from '../Interfaces/user.interface';
import generateToken from '../middlewares/authMiddleware';

// export async function getUserById(id:number): Promise<IUser> {
//   const sql = 'Select * from Trybesmith.users where id = ?';
//   const rows = await connection.execute<ResultSetHeader & IUser>(sql, [id]);
//   return rows[0] as IUser;
// }

export default async function create(user:IUser): Promise<string> {
  const { username, level, vocation, password }: IUser = user;

  const sql = `
  INSERT INTO Trybesmith.users (USERNAME,LEVEL,VOCATION,PASSWORD) VALUES (?,?,?,?)
`;
  const rows = await 
  connection.execute<ResultSetHeader>(sql, [username, level, vocation, password]);
  const idProductCreated: number = rows[0].insertId;
  const payload = { id: idProductCreated, ...user };
  const userToken = generateToken(payload);
  return userToken;
}
