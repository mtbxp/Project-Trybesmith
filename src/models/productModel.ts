import { RowDataPacket } from 'mysql2';
import { Product } from '../interfaces/IProducts';
import connection from './connection';

const getAll = async (): Promise<Product[]> => {
  const [products] = await connection
    .execute<RowDataPacket[] & Product[]>('SELECT * FROM Trybesmith.products;');
  return products;
};

export default {
  getAll,
};