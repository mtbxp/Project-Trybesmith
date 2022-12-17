import { ResultSetHeader } from 'mysql2';
import { UserRequest } from '../interfaces/user.interface';
import connection from './connection';

const createUser = async (user: UserRequest): Promise<number> => {
  const { username, vocation, level, password } = user;
  const values = Object.keys(user).map((_element) => '?').join(', ');
  const query = `INSERT INTO Trybesmith.users
  (username, vocation, level, password) VALUES
  (${values})`;

  const [result] = await connection
    .execute<ResultSetHeader>(query, [username, vocation, level, password]);
  return result.insertId;
};

export default { createUser };