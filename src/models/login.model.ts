import { RowDataPacket } from 'mysql2/promise';
import { TLogin, TUser } from './interfaces';
import connection from './connection';

const findUser = async (loginData: TLogin): Promise<TUser[]> => {
  const { username, password } = loginData;
  const [result] = await connection.execute<RowDataPacket[] & TUser[]>(
    'SELECT id, username FROM Trybesmith.users WHERE username = ? AND password = ?',
    [username, password],
  );
  return result;
};

export default { findUser };