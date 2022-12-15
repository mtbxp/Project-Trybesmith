import { ResultSetHeader } from 'mysql2';
import connection from './connection';

import { Product, ProductDetail } from '../interfaces';

export async function create(product: ProductDetail): Promise<Product> {
  const { name, amount } = product;
  
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const values = [name, amount];
  
  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;
  
  const newProduct: Product = { id, name, amount };
  return newProduct;
}

export async function getAll(): Promise<Product[]> {
  const query = 'SELECT * FROM Trybesmith.products';
  
  const [products] = await connection.execute(query);
  
  return products as Product[];
}

export async function update(id: number, orderId: number): Promise<number> {
  const query = 'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?';
  const values = [orderId, id];

  await connection.execute(query, values);

  return id;
}