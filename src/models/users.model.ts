import ResultSetHeader from 'mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader';
import { TUsers } from '../types';
import connection from './connection';

/* TUsers = { 
  username: string,
  vocation: string,
  level: number,
  password: string,
}; */

const createUser = async (
  username: string, 
  vocation: string,
  level: number, 
  password: string,
): Promise<TUsers> => {
  const [user] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?);',
    [username, vocation, level, password],
  );

  const { insertId } = user;

  const userCreated = {
    id: insertId,
    username,
    vocation,
    level,
    password,
  } as TUsers;

  return userCreated;
};

export default {
  createUser,
};