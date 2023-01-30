import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { Tlogin, Tpayload, Tuser } from '../types';
import connection from './connection';

const addUser = async (user: Tuser):Promise<Tpayload> => {
  const { username, vocation, level, password } = user;
  const result = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  const [dataInserted] = result;
  const { insertId } = dataInserted;
  console.log(insertId, username);
  return { id: insertId, username };
};

const login = async (user: Tlogin):Promise<Tlogin & undefined> => {
  const { username, password } = user;
  const [result] = await connection.execute<RowDataPacket[] & Tlogin[] & undefined>(
    'SELECT id FROM Trybesmith.users WHERE username = ? AND password = ?', 
    [username, password],
  );
  return result[0];
};

export default { addUser, login };
