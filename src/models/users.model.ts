import { ResultSetHeader } from 'mysql2';
import { User } from '../types';
import connection from './connection';

const addUser = async ({ username, vocation, level, password }: User) => {
  const query = `INSERT INTO Trybesmith.users
  (username, vocation, level, password) VALUES (?, ?, ?, ?)`;
  const [result] = await connection
    .execute<ResultSetHeader>(query, [username, vocation, level, password]);
  const id = result.insertId;
  return id;
};

const a = () => {};

export {
  addUser,
  a,
};