import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces';
import connection from './connection';

const create = async (user: IUser): Promise<number> => {
  const { username, vocation, level, password } = user;
  const query = `INSERT INTO Trybesmith.users (username, vocation, level, password)
      VALUES (?, ?, ?, ?)`;
  const values = [username, vocation, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;
  return id;
};

export default {
  create,
};
