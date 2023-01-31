import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { TLogin, TUsers } from '../types';
import connection from './connection';

const createUser = async (userInfo: TUsers): Promise<TUsers> => {
  const { username, vocation, level, password } = userInfo;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)',
    [username, vocation, level, password],
  );
  return { id: insertId, ...userInfo };
};

const getByUser = async ({ username, password }: TLogin): Promise<TUsers | undefined> => {
  const [[user]] = await connection.execute<RowDataPacket[] & TUsers[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ? AND password =?;',
    [username, password],
  );
  return user;
};

export default { createUser, getByUser };
