import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { TProducts } from '../types';
import connection from './connection';

const getAllProducts = async (): Promise<TProducts[]> => {
  const [rows] = await connection.execute<RowDataPacket[] & TProducts[]>('SELECT * FROM Trybesmith.products');
  return rows;
};

const createProduct = async (productInfo: TProducts): Promise<TProducts> => {
  const { name, amount } = productInfo;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)`,
    [name, amount],
  );
  return { id: insertId, ...productInfo };
};

export default { getAllProducts, createProduct };
