import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Product, ProductRequest } from '../interfaces/product.interface';
import connection from './connection';

const createProduct = async ({ name, amount }: ProductRequest): Promise<number> => {
  const query = `INSERT INTO Trybesmith.products
  (name, amount) VALUES
  (?, ?)`;
  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  return result.insertId;
};

const getAll = async (): Promise<Product> => {
  const query = 'SELECT * FROM Trybesmith.products';
  const [rows] = await connection.execute<RowDataPacket[] & Product>(query);
  return rows;
};

export default { createProduct, getAll };