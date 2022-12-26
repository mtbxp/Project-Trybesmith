import { ResultSetHeader } from 'mysql2';
import { CreatedProduct, NewProduct } from '../interfaces/Product';
import connection from './connection';

export default async function createProduct({ name, amount }: NewProduct): Promise<CreatedProduct> {
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(query, [name, amount]);
  return {
    id: insertId,
    name,
    amount,
  };
}