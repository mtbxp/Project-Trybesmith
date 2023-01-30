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

export default {
  addProduct,
};