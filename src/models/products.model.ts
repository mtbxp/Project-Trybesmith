import { ResultSetHeader } from 'mysql2';
import { Product, ProductOrd, ProductR } from '../interfaces/Product';
import connections from './connection';

const addNewProduct = async (product: Product): Promise<ProductR> => {
  const [{ insertId }] = await connections.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)`, [product.name, product.amount]);
  return { id: insertId, ...product };
};

const getAllProducts = async (): Promise<ProductOrd[]> => {
  const [result] = await connections.execute('SELECT * FROM Trybesmith.products ORDER BY id');
  return result as ProductOrd[];
};

export default {
  addNewProduct,
  getAllProducts,
};