import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Product, ProductId } from '../interfaces/interfaces';
import connection from './connection';

const getAllProducts = async (): Promise<ProductId[]> => {
  const [products] = await connection
    .execute<RowDataPacket[] & ProductId[]>('SELECT * FROM Trybesmith.products;');

  return products;
};

const createProduct = async (product: Product): Promise<ProductId> => {
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';

  const [response] = await connection
    .execute<ResultSetHeader>(query, [product.name, product.amount]);

  const newProduct = { id: response.insertId, ...product };
  return newProduct;
};

export default {
  createProduct,
  getAllProducts,
};