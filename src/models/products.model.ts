import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { TProducts } from '../types';

const createProduct = async (name: string, amount: string): Promise<TProducts> => {
  const [product] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?);',
    [name, amount],
  );

  const { insertId } = product;

  const productCreated = {
    id: insertId,
    name,
    amount,
  } as TProducts;

  return productCreated;
};

const getAllProducts = async ():Promise<TProducts> => {
  const [products] = await connection
    .execute<RowDataPacket[] & TProducts>('SELECT * FROM Trybesmith.products');

  return products as TProducts;
};

export default {
  createProduct,
  getAllProducts,
};
