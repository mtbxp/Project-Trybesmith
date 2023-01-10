import { RowDataPacket } from 'mysql2/promise';
import { TLogin } from '../types';
import connection from './connection';

const login = async (user:TLogin):Promise<TLogin> => {
  const [[result]] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ?',
    [user.username],
  );
  return result as TLogin;
};

export default { login };