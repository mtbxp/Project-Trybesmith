import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import Product from '../interface/productInterface';

const productCreateModel = async (name: string, amount: string): Promise<Product> => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  const { insertId } = result;

  return { id: insertId, name, amount };
};

const productGetAllModel = async (): Promise<Product[]> => {
  const [result] = await connection.execute<RowDataPacket[]>(
    'SELECT id, name, amount, order_id AS orderId FROM Trybesmith.products',
  );

  return result as Product[];
};

export { productCreateModel, productGetAllModel };