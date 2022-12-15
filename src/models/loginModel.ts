import { RowDataPacket } from 'mysql2/promise';
import { TLogin } from '../types';
import connection from './connection';

export async function login(user: TLogin): Promise<TLogin | undefined> {
  const { username } = user;
  const [[getUser]] = await connection
    .execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ?;',
    [username],
  );
  
  return getUser as TLogin;
}

export default login;