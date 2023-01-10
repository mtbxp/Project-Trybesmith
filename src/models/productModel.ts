import { RowDataPacket } from 'mysql2';
import { Product } from '../types';
import connection from './connection';

const listAllProducts = async () => {
  const [rows] = await connection.execute<RowDataPacket[]>('SELECT * FROM Trybesmith.products');
  return rows as Product[];
};

export default listAllProducts;