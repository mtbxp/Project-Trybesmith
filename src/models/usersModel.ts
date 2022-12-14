import { ResultSetHeader } from 'mysql2';
import { Tuser } from '../types/types';
import connection from './connection';

const createUser = async (user: Tuser): Promise<Tuser> => {
  const { username, vocation, level, password } = user;
  const query = `INSERT INTO Trybesmith.users (username, vocation, level, password) 
  VALUES (?, ?, ?, ?)`;
  const values = [username, vocation, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct: Tuser = { id, ...user };
  return newProduct;
};

export default {
  createUser,
};