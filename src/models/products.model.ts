import { ResultSetHeader } from 'mysql2';
import { Product } from '../types';
import connection from './connection';

const addProduct = async ({ name, amount }: Product) => {
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  const id = result.insertId;
  return { id, name, amount };
};

const a = () => {};

export {
  addProduct,
  a,
};