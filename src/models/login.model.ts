import { RowDataPacket } from 'mysql2';
import { Login, LoginComId } from '../types';
import connection from './connection';

const loginValidation = async ({ username, password }: Login): Promise<LoginComId> => {
  const query = `SELECT username, password, id FROM Trybesmith.users
  WHERE username = ? AND password = ?`;
  const [rows] = await connection
    .execute<RowDataPacket[]>(query, [username, password]);
  return rows[0] as LoginComId;
};

const a = () => {};

export {
  loginValidation,
  a,
};