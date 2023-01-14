import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import User from '../interfaces/user.interface';
import Login from '../interfaces/login.interface';

const registerUser = async (user: User): Promise<number> => {
  const { username, vocation, level, password } = user;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)',
    [username, vocation, level, password],
  );  
  return insertId;
};

const findUser = async (login: Login): Promise<User[]> => {
  const { username, password } = login;
  const [result] = await connection.execute<(
  RowDataPacket & User)[]>(
    'SELECT id, username FROM Trybesmith.users WHERE username = ? AND password = ?',
    [username, password],
    );
  return result;
};

const findAllUsers = async (): Promise<User[]> => {
  const [users] = await connection.execute(
    'SELECT * FROM Trybesmith.users',
  );
  return users as User[];
};

export default {
  registerUser,
  findUser,
  findAllUsers,
};