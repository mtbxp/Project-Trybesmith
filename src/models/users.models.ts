import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { InterfaceUser, InterfaceLogin } from '../interfaces';

const addUser = async (user: InterfaceUser): Promise<InterfaceUser> => {
  const { username, password, level, vocation } = user;
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, password, level, vocation) VALUES (?,?,?,?)',
    [username, password, level, vocation],
  );
  return { id: insertId, username, level, vocation };
};

const getUser = async ({ username }: InterfaceLogin): Promise<InterfaceUser> => {
  const [[result]] = await connection
    .execute<RowDataPacket[] & InterfaceUser[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ?',
    [username],
  );
  return result;
};

export default {
  addUser,
  getUser,
};
