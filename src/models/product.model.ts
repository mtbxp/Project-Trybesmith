import { ResultSetHeader } from 'mysql2';
import { ProductRequest } from '../interfaces/product.interface';
import connection from './connection';

const createProduct = async ({ name, amount }: ProductRequest): Promise<number> => {
  const query = `INSERT INTO Trybesmith.products
  (name, amount) VALUES
  (?, ?)`;
  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  return result.insertId;
}; 

export default { createProduct };