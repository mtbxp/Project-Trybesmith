import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import Product from '../interfaces/product.interface';

const createProduct = async (product: Product): Promise<Product> => {
  const { name, amount } = product;
  const result = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)',
    [name, amount],
  );
  const [dataInserted] = result;  
  const { insertId } = dataInserted;
  return { id: insertId, ...product };
};

const getAllProducts = async (): Promise<Product[]> => {
  const products = await connection.execute('SELECT * FROM Trybesmith.products');
  const [rows] = products;
  return rows as Product[];
};

export default {
  createProduct,
  getAllProducts,
};