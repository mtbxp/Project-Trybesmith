import { ResultSetHeader, RowDataPacket } from 'mysql2';

import conn from './connection';
import Product from '../types';

const getAllProducts = async (): Promise<Product[]> => {
  const [result] = await conn.execute<RowDataPacket[] & Product[]>(
    'SELECT * FROM Trybesmith.products',
  );
  return result as Product[];
};

const addNewProduct = async ({ name, amount }: Product) => {
  const [result] = await conn.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)',
    [name, amount],
  );
  const newProduct = {
    id: result.insertId,
    name,
    amount,
  };
  return newProduct;
};

export default {
  getAllProducts,
  addNewProduct,
};