import { ResultSetHeader } from 'mysql2/promise';
import { TUser } from './interfaceUser';
import connection from './connection';

const addUserModel = async (newUserData: TUser): Promise<TUser> => {
  const { username, vocation, level, password } = newUserData;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  return { id: result.insertId, ...newUserData };
};

export default { addUserModel };