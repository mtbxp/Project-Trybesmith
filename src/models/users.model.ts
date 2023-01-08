import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import IUsers from '../interfaces/users.interface';

const insertUser = async (user: IUsers): Promise<IUsers> => {
  const [resp] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)', 
    [user.username, user.vocation, user.level, user.password],
  );
  const result = { id: resp.insertId, ...user };
  return result;
};

export default {
  insertUser,
};