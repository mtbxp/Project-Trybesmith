import { ResultSetHeader } from 'mysql2/promise';
import { TUser } from './interfaces';
import connection from './connection';

const add = async (newUserData: TUser): Promise<TUser> => {
  const { username, vocation, level, password } = newUserData;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  return { id: result.insertId, ...newUserData };
};

export default { add };