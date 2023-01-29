import { RowDataPacket } from 'mysql2';
import { TProducts } from '../types';
import connection from './connection';

const getAllProducts = async (): Promise<TProducts[]> => {
  const [rows] = await connection.execute<RowDataPacket[] & TProducts[]>('SELECT * FROM Trybesmith.products');
  return rows;
};

export default { getAllProducts };
