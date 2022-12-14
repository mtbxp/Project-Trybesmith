import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { User, UserWithPassword } from '../types/types';
import connection from './connection';

const getByUsername = async (username: string): Promise<UserWithPassword> => {
  const [[user]] = await connection
    .execute<RowDataPacket[] & UserWithPassword[]>(`SELECT * FROM Trybesmith.users 
    WHERE username = ?;`, [username]);
  return user;
};

const create = async (user: UserWithPassword): Promise<User> => {
  const { username, password, level, vocation } = user;
  const query = `INSERT INTO Trybesmith.users (username, password, level, vocation)  
  VALUES (?,?,?,?)`;
  const [response] = await connection
    .execute<ResultSetHeader>(query, [username, password, level, vocation]);
    
  const userWithoutPassword = { id: response.insertId, username, level, vocation };
  return userWithoutPassword;
};

export default {
  getByUsername,
  create,
};