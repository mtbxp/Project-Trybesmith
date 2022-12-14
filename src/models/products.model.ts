import { ResultSetHeader } from 'mysql2';
import connection from './connection';

export type Product = {
  id: number;
  name: string;
  amount: string;
};

const createProduct = async (name: string, amount: string): Promise<Product> => {
  const [product] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?);',
    [name, amount],
  );

  const { insertId } = product;

  const productCreated = {
    id: insertId,
    name,
    amount,
  } as Product;

  return productCreated;
};

export default {
  createProduct,
};
