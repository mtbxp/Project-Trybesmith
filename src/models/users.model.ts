import { ResultSetHeader } from 'mysql2/promise';
import { TUser } from './interfaces';
import connection from './connection';

const insertNewUser = async ({ userName, vocation, level, password }: TUser): Promise<number> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [userName, vocation, level, password],
  );
  return insertId;
};

export default {
  insertNewUser,
};