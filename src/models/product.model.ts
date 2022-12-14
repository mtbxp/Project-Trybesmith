import { ResultSetHeader } from 'mysql2/promise';
import { Product, IProduct } from '../interfaces/index';
import connection from './connection';

export async function create(product: Product): Promise<IProduct> {
  const { ammount, name } = product;
  const query = 'INSERT INTO Trybesmith (name, ammount) VALUES (?, ?)';
  const values = [name, ammount];
  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;
  
  return { id, name, ammount };
}