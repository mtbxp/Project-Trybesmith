import { ResultSetHeader } from 'mysql2';
import { Product, ProductId } from '../interfaces/interfaces';
import connection from './connection';

const createProduct = async (product: Product): Promise<ProductId> => {
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';

  const [response] = await connection
    .execute<ResultSetHeader>(query, [product.name, product.amount]);

  const newProduct = { id: response.insertId, ...product };
  return newProduct;
};

export default {
  createProduct,
};