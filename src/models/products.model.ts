import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';

export const registerProduct = async (name:string, amount:string): Promise<ResultSetHeader[]> => {
  const product = await connection.execute(
    'INSERT INTO product VALUES (?, ?)',
    [name, amount],
  );
  return product as ResultSetHeader[];
};

export const getAllProducts = async (): Promise<RowDataPacket[]> => {
  const allProducts = await connection.execute(
    'SELECT * FROM products',
  );
  return allProducts as RowDataPacket[];
};