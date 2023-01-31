import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUsers } from '../interfaces/users.interface';

const addUser = async (user: IUsers) => {
  const { username, vocation, level, password } = user;
  const q = 'INSERT INTO Trybesmith.users (username,vocation, level, password) VALUES (?, ?, ?, ?)';
  const values = [username, vocation, level, password];
  const [result] = await connection.execute<ResultSetHeader>(q, values);
  const { insertId } = result;
  return insertId;
};

export = {
  addUser,
};
