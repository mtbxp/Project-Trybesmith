import { RowDataPacket } from 'mysql2/promise';
import { User } from '../types';
import connection from './connection';

const userLogin = async ({ username, password }: User): Promise<User | number> => {
  const [user] = await connection.execute<RowDataPacket[] & User>(
    `SELECT * FROM Trybesmith.users
    WHERE username = ? AND password = ?`,
    [username, password],
  );

  if (!user.length) return user.length;
  return user;
};

export default {
  userLogin,
};