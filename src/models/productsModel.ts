import { ResultSetHeader } from 'mysql2';
import { Product } from '../types';
import connection from './connection';

export async function getAll(): Promise<Product[]> {
  const [products] = await connection.execute('SELECT * FROM Trybesmith.products');
  return products as Product[];
}

export async function insertProducts({ name, amount }: Product) {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  return { id: result.insertId, name, amount };
}  
