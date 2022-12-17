import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Users } from '../interfaces/interfaces';
import connection from './connection';

const registerUser = async (user: Users):Promise<Users> => {
  const query = `INSERT INTO
    Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)`;
  const [response] = await connection
    .execute<ResultSetHeader>(query, [user.username, user.vocation, user.level, user.password]);

  const newUser = { id: response.insertId, ...user };
  return newUser;
};

const getUserByName = async (username: string) => {
  const [[user]] = await connection
    .execute<RowDataPacket[] & Users[]>(`SELECT * FROM Trybesmith.users
    WHERE username = ?;`, [username]);

  return user;
};

export default {
  registerUser,
  getUserByName,
};