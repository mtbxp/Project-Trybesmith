import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { TProduct } from '../types';

const registerProduct = async (product: TProduct) => {
  const [{ insertId }] = await connection.query<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [product.name, product.amount],
  );
  return insertId as number;
};

export default {
  registerProduct,
};
