import { RowDataPacket } from 'mysql2/promise';
import { Login } from '../types/login.types';
import connection from './connection';

const getByUser = async (user: string): Promise<Login | undefined> => {
  const [result] = await connection.execute<RowDataPacket[] & Login[]>(
    'SELECT username, password FROM Trybesmith.users WHERE username = ? ',
    [user],
  );
  return result[0];
};

export default {
  getByUser,
};
