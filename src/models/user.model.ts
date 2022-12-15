import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Users } from '../interfaces/users';

const createUser = async ({ username, vocation, level, password }: Users): Promise<Users> => {
  const query = `INSERT INTO Trybesmith.users
  (username, vocation, level, password)
  VALUES (?,?,?,?)`;
  const [{ insertId }] = await
  connection.execute<ResultSetHeader>(query, [username, vocation, level, password]);

  return { id: insertId, username, vocation, level, password };
};

export default {
  createUser,
};