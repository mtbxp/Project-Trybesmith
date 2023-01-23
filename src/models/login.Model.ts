import { RowDataPacket } from 'mysql2';
import connection from './connection';
import ILogin from '../interfaces/login.interface';
import IUser from '../interfaces/user.interface';

export async function makeLogin({ username, password }: ILogin): Promise<number> {
  const query = 'SELECT * FROM Trybesmith.users WHERE username=? AND password=? ';
  const [result] = await connection.execute<(IUser & RowDataPacket
  )[]>(query, [username, password]);
  console.log(result);
  return result.length;
}

export default {
  makeLogin,
};