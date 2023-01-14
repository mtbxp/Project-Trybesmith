import { RowDataPacket } from 'mysql2/promise';
import { TProducts } from '../types';
import connection from './connection';

const getAll = async (): Promise<TProducts[]> => {
  const [result] = await connection.execute<RowDataPacket[] & TProducts[]>(
    'SELECT id, name, amount, orderId FROM Trybesmith.products;',
  );

  return result;
};

export default { getAll };
