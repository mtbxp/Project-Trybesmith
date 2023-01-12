import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import User from '../interfaces/user.interface';

const registerUser = async (user: User): Promise<number> => {
  const { username, vocation, level, password } = user;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)',
    [username, vocation, level, password],
  );
  return insertId;
};

// const getAllUsers = async (): Promise<User[]> => {
//   const query = 'SELECT * FROM Trybesmith.users';

//   const [users] = await connection.execute(query);
//   return users as User[];
// };

const getUserByUsername = async (username: string): Promise<User> => {
  const query = 'SELECT * FROM Trybesmith.users WHERE username = ?';
  const values = [username];

  const [result] = await connection.execute(query, values);
  const [user] = result as User[];

  return user;
};

export default {
  registerUser,
  getUserByUsername,
  // getAllUsers,
};