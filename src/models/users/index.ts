import { ResultSetHeader } from 'mysql2';
import connection from '../connection';

const insertUser = async (username: string, vocation: string, level: number, password: string)
: Promise<number> => {
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES( ?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  return insertId;
};

export default insertUser;