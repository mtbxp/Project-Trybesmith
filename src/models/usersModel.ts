import { ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces';
import connection from './connection';

const registerUser = async (user: IUser): Promise<IUser> => {
  const { username, vocation, level, password } = user;
  const [result] = await connection.execute<ResultSetHeader & IUser>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?);',
    [username, vocation, level, password],
  );

  return result;
};

export default {
  registerUser,
};
