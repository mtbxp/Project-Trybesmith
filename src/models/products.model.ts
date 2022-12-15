import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { TProducts } from '../interfaces/types';
import connection from './connection';

export async function getAll(): Promise<TProducts[]> {
  const [products] = await connection.execute<RowDataPacket[]>('SELECT * FROM Trybesmith.products');

  return products as TProducts[];
}

export async function insertProduct(product:TProducts): Promise<TProducts> {
  const { name, amount } = product;
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUE (?, ?)',
    [name, amount],
  );
  const returnProduct = { id: insertId, ...product };
  return returnProduct as TProducts;
}