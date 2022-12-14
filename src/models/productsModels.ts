// import { RowDataPacket } from 'mysql2/promise';
import { ResultSetHeader } from 'mysql2';
import { TProducts } from '../types';
import connection from './connection';

export async function createProduct(name: string, amount: string) {
  const query = `INSERT INTO Trybesmith.products (name, amount)
  VALUES (?, ?)`;
  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  const { insertId } = result;
  const newProduct = {
    id: insertId,
    name,
    amount,
  };
  return newProduct;
}

export async function getALlProducts(): Promise<TProducts[]> {
  const [products] = await connection.execute('SELECT * FROM Trybesmith.products');

  return products as TProducts[];
}
