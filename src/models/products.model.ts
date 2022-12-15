import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';

export type Product = {
  id: number;
  name: string;
  amount: string;
  orderId: number;
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

const getAllProducts = async ():Promise<Product> => {
  const [products] = await connection
    .execute<RowDataPacket[] & Product>('SELECT * FROM Trybesmith.products');

  return products as Product;
};

export default {
  createProduct,
  getAllProducts,
};
