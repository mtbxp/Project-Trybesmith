import { ResultSetHeader } from 'mysql2';
import { TUsers } from '../types';
import connection from './connection';

const createUser = async (userInfo: TUsers): Promise<TUsers> => {
  const { username, vocation, level, password } = userInfo;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)',
    [username, vocation, level, password],
  );
  return { id: insertId, ...userInfo };
};

export default { createUser };
