import { ResultSetHeader } from 'mysql2/promise';
import { TRegister } from '../types';
import connection from './connection';

const register = async (user: TRegister): Promise<TRegister> => {
  const [result] = await connection.execute<ResultSetHeader & TRegister>(
    `INSERT INTO Trybesmith.users
      (username, vocation, level, password) VALUES (?,?,?,?)`,
    [user.username, user.vocation, user.level, user.password],
  );

  return result;
};

export default { register };