import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { TProducts, TNewProduct } from '../types';
import connection from './connection';

const getAll = async (): Promise<TProducts[]> => {
  const [result] = await connection.execute<RowDataPacket[] & TProducts[]>(
    'SELECT id, name, amount, order_id FROM Trybesmith.products;',
  );

  return result;
};

const insert = async (product: TNewProduct): Promise<TProducts> => {
  const [result] = await connection.execute<ResultSetHeader & TNewProduct>(
    `INSERT INTO Trybesmith.products
      (name, amount) VALUES (?,?)`,
    [product.name, product.amount],
  );

  return { id: result.insertId, ...product };
};

export default { getAll, insert };
