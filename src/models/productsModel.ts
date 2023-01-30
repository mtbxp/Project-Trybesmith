import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { Product } from '../types';
import connection from './connection';

const createProduct = async (product: Product): Promise<Product> => {
  const { name, amount } = product;
  const result = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)', 
    [name, amount],
  );

  const [{ insertId }] = result;
  const newProduct = { id: insertId, ...product };
  return newProduct;
};

const getAllProducts = async (): Promise <Product[]> => {
  const result = await connection.execute<RowDataPacket[] & Product[]>(
    'SELECT * FROM Trybesmith.products',
  );

  const [rows] = result;
  return rows;
};

export default {
  createProduct,
  getAllProducts,
};