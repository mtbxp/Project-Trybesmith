import { RowDataPacket } from 'mysql2/promise';
import { TProducts } from '../types';
import connection from './connection';

const getProducts = async (): Promise<TProducts[]> => {  
  const [result] = await connection
    .execute<RowDataPacket[] & TProducts[]>('SELECT * FROM Trybesmith.products;');

  return result;
};

const insertProduct = async (newProduct: TProducts) => {
  const { id, name, amount } = newProduct;
  await connection.execute(
    'INSERT INTO Trybesmith.products (id, name, amount) VALUES (?, ?, ?)',
    [id, name, amount],
  );

  return getProducts();
};

export default {
  getProducts,
  insertProduct,
};