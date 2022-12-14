import { TLogin } from '../types/types';
import connection from './connection';

const insertLoginModel = async (login: TLogin): Promise<TLogin> => {
  const { username, password } = login;
  const query = `SELECT username, id FROM Trybesmith.users 
  WHERE username = ? AND password = ?`;
  const values = [username, password];

  const [result] = await connection.execute(query, values);
  const [user] = result as TLogin[];
  return user || null;
};

export default {
  insertLoginModel,
};