import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { TProduct } from '../types';

async function getAllProducts(): Promise<TProduct[]> {
  const query = 'SELECT * FROM Trybesmith.products';
  const [products] = await connection
    .execute(query);

  return products as TProduct[];
}

async function insertProduct(name: string, amount:string): Promise<TProduct> {
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const values = [name, amount];

  const [insertedProduct] = await connection
    .execute<ResultSetHeader & TProduct>(query, values);

  return {
    id: insertedProduct.insertId,
    name,
    amount, 
  };
}

export default {
  getAllProducts,
  insertProduct,
};