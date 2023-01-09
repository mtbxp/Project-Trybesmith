import { ResultSetHeader } from 'mysql2/promise';
import { TUser } from '../types';
import connection from './connection';

const createUser = async (user: TUser):Promise<TUser> => {
  const { username, vocation, level, password } = user;

  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users( username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  const createdUser = { id: insertId, username, vocation, level, password };
 
  return createdUser;
};

export default { createUser };