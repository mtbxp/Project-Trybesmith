import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { InterfaceUser } from '../interfaces';

const addUser = async (user: InterfaceUser) => {
  const { username, password, level, vocation } = user;
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, password, level, vocation) VALUES (?,?,?,?)',
    [username, password, level, vocation],
  );
  return { id: insertId, username, level, vocation };
};

export default {
  addUser,
};
