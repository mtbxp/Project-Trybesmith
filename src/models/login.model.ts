import { RowDataPacket } from 'mysql2';
import { TLogin } from '../types';
import connection from './connection';

const checkLogin = async (username: string, password: string) => {
  const [login] = await connection.execute<RowDataPacket[] 
  & TLogin>(
    `SELECT id, username, password FROM Trybesmith.users 
  WHERE username = ? AND password = ?`,
    [username, password],
  );
  console.log(login);
  if (login.length === 0) {
    throw new Error();
  }

  return login;
};

export default {
  checkLogin,
};