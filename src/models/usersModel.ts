import { ResultSetHeader } from 'mysql2/promise';
import { Tuser } from '../types';
import connection from './connection';

const addUser = async (user: Tuser):Promise<Tuser> => {
  const { username, vocation, level, password } = user;
  const result = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  const [dataInserted] = result;
  const { insertId } = dataInserted;
  return { id: insertId, ...user };
};

export default { addUser };
