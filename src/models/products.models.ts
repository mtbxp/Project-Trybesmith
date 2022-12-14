import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Product } from '../interfaces/products';

const createNewProducts = async ({ name, amount }: Product): Promise<Product> => {
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)';
  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  return { id: insertId, name, amount };
};

export default {
  createNewProducts,
};
