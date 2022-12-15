import { ResultSetHeader } from 'mysql2';
import { User } from '../interfaces/users.interface';
import connection from './connection';

export const registerNewUserModel = async ({
  username,
  vocation,
  level,
  password,
}: User): Promise<User> => {
  const query = `INSERT INTO Trybesmith.users (username, vocation, level, password)
  VALUES (?, ?, ?, ?)`;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    query,
    [username, vocation, level, password],
  );
  return { id: insertId, username, vocation, level, password };
};

export default {
  registerNewUserModel,
};
