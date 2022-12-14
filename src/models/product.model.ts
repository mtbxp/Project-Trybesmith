import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { Product, IProduct } from '../interfaces/index';
import connection from './connection';

const productTable = 'Trybesmith.products';

export async function create(product: Product): Promise<IProduct[]> {
  const { amount, name } = product;
  const query = `INSERT INTO ${productTable} (name, amount) VALUES (?, ?)`;
  const values = [name, amount];
  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;
  
  return [{ id, name, amount }];
}

export async function getAll(): Promise<IProduct[]> {
  const query = `SELECT * FROM ${productTable}`;
  const [result] = await connection.execute<RowDataPacket[] & IProduct>(query);

  return [result];
}