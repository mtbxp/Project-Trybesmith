import { ResultSetHeader, RowDataPacket } from 'mysql2';
import Product from '../types/Product';
import connection from './connection';

const registerProduct = async ({ name, amount }: Product) => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUE (?, ?)',
    [name, amount],
  );

  return {
    id: result.insertId,
    name,
    amount,
  };
};

const getAllProducts = async (): Promise<Product[]> => {
  const [result] = await connection.execute<RowDataPacket[] & Product[]>(
    'SELECT * FROM Trybesmith.products',
  );
  return result;
};

export default {
  registerProduct,
  getAllProducts,
};