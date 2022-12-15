import { ResultSetHeader/* , RowDataPacket  */ } from 'mysql2';
import connection from './connection';
import { User } from '../interfaces/interface';
import { createToken } from '../auth/jwtFunctions';

async function postUser({ username, vocation, level, password }: User): Promise<string> {
  await connection.execute<ResultSetHeader & User>(
    'INSERT INTO Trybesmith.users(username,vocation,level,password) VALUES(?,?,?,?)',
    [username, vocation, level, password],
  );
  // criar token SEM A PASSWORD
  const token = createToken({ username, vocation, level });

  return token;
}

export default {
  // getProductById,
  // getAllProducts,
  postUser,
  // updateProduct,
};