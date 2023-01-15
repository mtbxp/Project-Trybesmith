import { ResultSetHeader } from 'mysql2/promise';
import { Product } from '../interfaces/product.interface';
import connection from './connection';

const createProduct = async (product:Product):Promise<Product> => {
  const { name, amount } = product;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO trybesmith.products (name, amount) VALUES (?,?)',
    [name, amount],
  );
  const addedProduct = { id: result.insertId, ...product };
  return addedProduct;
};

export default {
  createProduct,
};