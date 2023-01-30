import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Product } from '../types/Product';

const addProduct = async ({ name, amount }: Product): Promise<Product> => {
  const [result] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.products (name, amount) VALUE(?, ?)`, [name, amount]);
  return { 
    id: result.insertId,
    name,
    amount,
  };
};

const getAllProducts = async (): Promise<Product[]> => {
  const [result] = await connection.execute('SELECT * FROM Trybesmith.products');
  return result as Product[];
};

export default {
  addProduct,
  getAllProducts,
};