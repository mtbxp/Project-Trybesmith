import { ResultSetHeader } from 'mysql2/promise';
import { TUsers } from '../types';
import connection from './connection';

const userAdd = async (user:TUsers): Promise<TUsers> => {
  const { username, vocation, level, password } = user;
  const [{ insertId }] = await connection.execute<ResultSetHeader & TUsers>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)',
    [username, vocation, level, password],
  ); 
    
  return { id: insertId, ...user };
};

export default {
  userAdd,
};