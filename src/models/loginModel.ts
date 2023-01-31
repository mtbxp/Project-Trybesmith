import { RowDataPacket } from 'mysql2/promise';
import { User } from '../types';
import connection from './connection';

const userLogin = async ({ username, password }: User): Promise<object> => {
  const [user] = await connection.execute<RowDataPacket[] & User>(
    `SELECT * FROM Trybesmith.users
    WHERE username = ? AND password = ?`,
    [username, password],
  );

  return user[0];
};

export default {
  userLogin,
};