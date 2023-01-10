import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { TProducts } from '../types';
import connection from './connection';

const getProducts = async (): Promise<TProducts[]> => {  
  const [result] = await connection
    .execute<RowDataPacket[] & TProducts[]>('SELECT * FROM Trybesmith.products;');

  return result;
};

const insertProduct = async (newProduct: TProducts) => {
  const { name, amount } = newProduct;
  const [product] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  const result = {
    id: product.insertId,
    ...newProduct,
  };

  return result;
};

export default {
  getProducts,
  insertProduct,
};