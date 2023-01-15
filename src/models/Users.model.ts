import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUsers } from '../interfaces/IUsers';

const insert = async (user: IUsers): Promise<number> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.users
    (username, vocation, level, password)
    VALUES (?, ?, ?, ?);`,
    [user.username, user.vocation, user.level, user.password],
  );

  return insertId;
};

export default insert;