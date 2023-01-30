import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Users } from '../types/User';

const addUser = async (user: Users) => {
  const { username, vocation, level, password } = user;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES(?, ?, ?, ?)',
    [username, vocation, level, password],
  );  
  return {
    id: result.insertId,
    username,
    level,
    vocation,
  };
};

export default {
  addUser,
};
