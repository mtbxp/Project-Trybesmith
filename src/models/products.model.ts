import { ResultSetHeader } from 'mysql2';
import { Product, ProductR } from '../interfaces';
import connections from './connection';

const addNewProduct = async (product: Product): Promise<ProductR> => {
  const [{ insertId }] = await connections.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.products (name) VALUES (?, ?)`, [product.name, product.amount]);
  return { id: insertId, ...product };
};

export default {
  addNewProduct,
};