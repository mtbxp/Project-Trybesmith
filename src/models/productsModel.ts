import { RowDataPacket } from 'mysql2/promise';
import { TProduct } from '../types';
import connection from './connection';

const getAll = async (): Promise<TProduct[]> => {
  const [rows] = await connection
    .execute<RowDataPacket[] & TProduct[]>(
    `SELECT id, name, amount,
     order_id FROM Trybesmith.products;`,
  );

  return rows;
};

export default { getAll };