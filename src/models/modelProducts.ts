import { ResultSetHeader } from 'mysql2';
import { TProducts } from '../types/products.type';
import connection from './connection';

async function insertProducts(name: string, amount: string): Promise<TProducts> {
  const [result] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)', 
    [name, amount],
  );

  return {
    id: result.insertId, 
    name,
    amount,
  };
}

export default insertProducts;