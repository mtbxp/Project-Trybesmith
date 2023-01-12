import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { TProduct } from '../types';

const registerProduct = async (product: TProduct) => {
  const [{ insertId }] = await connection.query<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [product.name, product.amount],
  );
  return insertId as number;
};

const getProducts = async (): Promise<TProduct[]> => {
  const [products] = await connection.query<RowDataPacket[]>('SELECT * FROM Trybesmith.products');
  return products as TProduct[];
};

export default {
  registerProduct,
  getProducts,
};
