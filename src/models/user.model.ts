import { ResultSetHeader } from 'mysql2';
import { User, UserParameters } from '../interfaces/user.interface';
import connection from './connection';

const createUserModel = async (user: UserParameters): Promise<User> => {
  const { username, vocation, level, password } = user;

  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?);',
    [
      username,
      vocation,
      level,
      password,
    ],
  );

  return { id: result.insertId, username, vocation, level, password };
};

const getAllUsersModel = async (): Promise<User[]> => {
  const [results] = await connection.execute(
    'SELECT * FROM Trybesmith.users;',
  );

  return results as User[];
};

export default {
  createUserModel,
  getAllUsersModel,
};
