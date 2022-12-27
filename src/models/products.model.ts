import { ResultSetHeader } from 'mysql2';
import { CreatedProduct, NewProduct, Product } from '../interfaces/Product';
import connection from './connection';

export async function createProduct({ name, amount }: NewProduct): Promise<CreatedProduct> {
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(query, [name, amount]);
  return {
    id: insertId,
    name,
    amount,
  };
}

export async function findAllProducts(): Promise<Product[]> {
  const query = 'SELECT * FROM Trybesmith.products';
  const [response] = await connection
    .execute(query);
  return response as Product[];
}