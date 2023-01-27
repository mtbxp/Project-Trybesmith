import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Product } from '../types';
import connection from './connection';

const addProduct = async ({ name, amount }: Product) => {
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  const id = result.insertId;
  return { id, name, amount };
};

const listAllProducts = async () => {
  const query = 'SELECT * FROM Trybesmith.products';
  const [rows] = await connection.execute<RowDataPacket[]>(query);
  return rows;
};

export {
  addProduct,
  listAllProducts,
};