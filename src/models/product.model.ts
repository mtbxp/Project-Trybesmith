import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { TProducts } from '../types/Types';

const getAll = async (): Promise<TProducts[]> => {
  const [products] = await connection
    .execute<RowDataPacket[] & TProducts[]>('SELECT * FROM Trybesmith.products;');
  return products;
};

export default {
  getAll,
};