import { RowDataPacket } from 'mysql2/promise';
import { TUser } from '../types';
import connection from './connection';

const getAllUser = async (): Promise<TUser[]> => {
  const [user] = await connection
    .execute<RowDataPacket[] & TUser[]>(
    'SELECT * FROM Trybesmith.users',
  );
  return user;
};

const insertUser = async ({ username, vocation, level, password }: TUser) => { 
  await connection.execute(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
};

export default {
  insertUser,
  getAllUser,
};
