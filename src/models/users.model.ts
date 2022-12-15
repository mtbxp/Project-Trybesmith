/* import { ResultSetHeader } from 'mysql2'; */
import { ResultSetHeader } from 'mysql2';
import tokenFunc from '../middlewares/jwtToken';
/* import { TAddUser } from '../types/usersTypes'; */
import connection from './connection';

export default async function insertProduct(
  username: string,
  vocation: string,
  level: number,
  password: string,
) {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ? ,?)',
    [username, vocation, level, password],
  );
  const { insertId } = result;
  if (insertId > 0) {
    return { token: tokenFunc(username) };
  }
}
