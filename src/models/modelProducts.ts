import { ResultSetHeader } from 'mysql2';
import { TOrder } from '../types/orders.type';
import { TProducts } from '../types/products.type';
import connection from './connection';

export async function insertProducts(name: string, amount: string): Promise<TProducts> {
  const [newProduct] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)', 
    [name, amount],
  );
 
  return {
    id: newProduct.insertId, 
    name,
    amount,
  };
}

export async function getAllProducts(): Promise<TOrder[]> {
  const [allProducts] = await connection
    .execute('SELECT * FROM Trybesmith.products');

  return allProducts as TOrder[];
}
