import { RowDataPacket } from 'mysql2';
import connection from './connection';

const checkLogin = async (username: string, password: string) => {
  const [login] = await connection.execute<RowDataPacket[]>(
    `SELECT id, username, password FROM Trybesmith.users 
WHERE username = ? AND password = ?`,
    [username, password],
  );

  return login;
};

export default {
  checkLogin,
};