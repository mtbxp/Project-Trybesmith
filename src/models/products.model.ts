import { RowDataPacket } from 'mysql2';
import { TProducts } from '../types/types';
import connection from './connection';

const getAll = async (): Promise<TProducts[]> => {
  const [products] = await connection
    .execute<RowDataPacket[] & TProducts[]>('SELECT * FROM Trybesmith.products;');
  return products;
};

export default {
  getAll,
};