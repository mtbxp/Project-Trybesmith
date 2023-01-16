import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { User, Login, UserPublic } from '../interfaces/User';
import connections from './connection';

const addNewUser = async (user: User): Promise<UserPublic> => {
  const { username, password, level, vocation } = user;
  const [{ insertId }] = await connections.execute<ResultSetHeader>(
    `
    INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)`,
    [username, vocation, level, password],
  );

  return { id: insertId, username, level, vocation };
};

const getUser = async (login: Login) => {
  const { username, password } = login;
  const [[result]] = await connections.execute<RowDataPacket[]>(`
  SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?`, [username, password]);
  
  return result;
};

export default {
  addNewUser,
  getUser,
};