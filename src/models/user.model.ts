import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User } from '../interfaces/user.interface';

const addUser = async (user:User) => {
  const { username, vocation, level, password } = user;
  const [newUser] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)',
    [username, vocation, level, password],
  );
  const result = { id: newUser.insertId, username, level, vocation };
  return result;
};

export default {
  addUser,
};