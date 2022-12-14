import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { User, NewUser } from '../interfaces/User';

const addUser = async (user: NewUser): Promise<User> => {
  const q = 'INSERT INTO Trybesmith.users (username, password, level, vocation) VALUES (?,?,?,?)';
  const { username, password, level, vocation } = user;
  const [response] = await connection
    .execute<ResultSetHeader>(q, [username, password, level, vocation]);
  const result = { id: response.insertId, username, level, vocation };
  return result;
};

const getUser = async (username: string): Promise<NewUser> => {
  const [[user]] = await connection
    .execute<RowDataPacket[] & NewUser[]>(`SELECT * FROM Trybesmith.users 
    WHERE username = ?;`, [username]);
  return user;
};

export default {
  addUser,
  getUser,
};