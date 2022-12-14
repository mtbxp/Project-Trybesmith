import { ResultSetHeader, RowDataPacket } from 'mysql2';

import connection from './connection';
import { Product, ProductInput } from '../types';

async function createProduct({ amount, name }: ProductInput): Promise<number> {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?);',
    [name, amount],
  );

  return insertId;
}

async function getAllProducts(): Promise<Product[]> {
  const [products] = await connection.execute<(RowDataPacket & Product)[]>(
    'SELECT id, name, amount, order_id as orderId FROM Trybesmith.products;');

  return products;
}

export { createProduct, getAllProducts };
