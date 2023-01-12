import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { TUser, Id } from '../types';

const registerUser = async (user: TUser): Promise<Id> => {
  const [{ insertId }] = await connection.query<ResultSetHeader>(
    `INSERT INTO Trybesmith.users
      (username, vocation, level, password)
    VALUES (?, ?, ?, ?)`,
    [user.username, user.vocation, user.level, user.password],
  );

  return insertId;
};

export default {
  registerUser,
};
