import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { DatabaseProduct, NewProduct, RegisteredProduct } from '../types/types';

export async function createProduct(product: NewProduct): Promise<RegisteredProduct> {
  const { name, amount } = product;
  const queryString = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?);';
  const valuesArray = [name, amount];
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(queryString, valuesArray);
  return { id, name, amount };
}

export async function getAll(): Promise<DatabaseProduct[]> {
  const queryString = 'SELECT * FROM Trybesmith.products;';
  const [list] = await connection.execute<RowDataPacket[]>(queryString);
  return list as DatabaseProduct[];
}