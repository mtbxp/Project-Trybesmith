import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { TProduct } from '../../types';
import connection from '../connection';

export const insertProduct = async (name: string, amount: string): Promise<number> => {
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES( ?, ?)',
    [name, amount],
  );
  return insertId;
};

export const getAllProducts = async (): Promise<TProduct[]> => {
  const [products] = await connection
    .execute<RowDataPacket & TProduct[]>('SELECT * FROM Trybesmith.products');
  return products;
};

export const findByOrderId = async (id: number): Promise<TProduct[]> => {
  const [productId] = await connection
    .execute<RowDataPacket
  & TProduct[]>('SELECT id FROM Trybesmith.products WHERE order_id = ?', [id]);
  return productId;
};
