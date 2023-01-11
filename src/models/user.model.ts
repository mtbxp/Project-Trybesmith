import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { User } from '../types';
import conn from './connection';

const getAllUsers = async (): Promise<User[]> => {
  const [result] = await conn.execute<RowDataPacket[] & User[]>(
    'SELECT * FROM Trybesmith.users',
  );
  return result as User[];
};

const getUserByUsername = async (name: string): Promise<User> => {
  const [[result]] = await conn.execute<RowDataPacket[] & User[]>(
    `SELECT * FROM Trybesmith.users
      WHERE username = (?)`,
    [name],
  );
  // console.log(result);
  return result;
};

// getUserByUsername('reigal');

const addNewUser = async (user: User) => {
  const [result] = await conn.execute<ResultSetHeader>(
    `INSERT INTO
      Trybesmith.users (username, vocation, level, password)
      VALUES (?,?,?,?)`,
    [user.username, user.vocation, user.level, user.password],
  );
  const newUser = {
    id: result.insertId,
    username: user.username,
    vocation: user.vocation,
    level: user.level,
  };
  return newUser;
};

export default {
  addNewUser,
  getAllUsers,
  getUserByUsername,
};