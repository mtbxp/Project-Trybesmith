import { ResultSetHeader } from 'mysql2/promise';
import { Product, IProduct } from '../interfaces/index';
import connection from './connection';

export async function create(product: Product): Promise<IProduct> {
  const { amount, name } = product;
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const values = [name, amount];
  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;
  
  return { id, name, amount };
}