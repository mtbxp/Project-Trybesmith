import { RowDataPacket } from 'mysql2/promise';

import { TProduct } from '../types';
import connection from './connection';

// RowDataPacket => SELECT
// ResultSetHeader => INSERT, DELETE, UPDATE
// OkPacket => SET (protocol_41)

const getAlProducts = async (): Promise<TProduct[]> => {
  const [product] = await connection
    .execute<RowDataPacket[] & TProduct[]>('SELECT * FROM Trybesmith.products;');
  return product;
};

export default { getAlProducts };
