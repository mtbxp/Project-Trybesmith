import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { TUser, User } from '../types';
import connection from './connection';

const create = async (user: TUser): Promise<number> => {
  const { username, vocation, level, password } = user;
  const query = `INSERT INTO Trybesmith.users (username, vocation, level, password) 
        VALUES (?, ?, ?, ?) `;
  const values = [username, vocation, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, values);

  const { insertId: id } = result;

  return id;
};

const login = async (username: string): Promise<User> => {
  const query = 'SELECT * FROM Trybesmith.users WHERE username = ?';
  const values = [username];

  const [[user]] = await connection.execute<RowDataPacket[] & User[]>(query, values);

  return user as User;
};

export default {
  create,
  login,
};