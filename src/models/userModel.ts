import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { TUser, Id, TLogin, TSimpleUser } from '../types';

const registerUser = async (user: TUser): Promise<Id> => {
  const [{ insertId }] = await connection.query<ResultSetHeader>(
    `INSERT INTO Trybesmith.users
      (username, vocation, level, password)
    VALUES (?, ?, ?, ?)`,
    [user.username, user.vocation, user.level, user.password],
  );

  return insertId;
};

const login = async (loginUser: TLogin): Promise<TSimpleUser | undefined> => {
  const [[user]] = await connection.query<RowDataPacket[]>(
    `SELECT id, username, password
    From Trybesmith.users
    WHERE users.username = ?`,
    [loginUser.username],
  );
  return user as TSimpleUser | undefined;
};

export default {
  registerUser,
  login,
};
