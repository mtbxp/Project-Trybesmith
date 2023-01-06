import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { TProduts } from '../types';
import connection from './connection';

const productsAdd = async (product:TProduts): Promise<TProduts> => {
  const { name, amount } = product;
  const [{ insertId }] = await connection.execute<ResultSetHeader & TProduts>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)',
    [name, amount],
  ); 
  
  return { id: insertId, ...product };
};

const getAll = async (): Promise<TProduts[]> => {
  const [products] = await connection
    .execute <(RowDataPacket[] & TProduts[])>('SELECT * FROM Trybesmith.products');
  console.log('model', products);
    
  return products;
};

export default {
  productsAdd,
  getAll,
};