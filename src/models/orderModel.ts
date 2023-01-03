import { ResultSetHeader } from 'mysql2';
import connection from './connection';

import { Order, OrderWithProduct } from '../interfaces';

export async function create(userId: number): Promise<Order> { 
  const query = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?)';
  const values = [userId];
  
  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;
  
  const newProduct: Order = { id, userId };
  return newProduct;
}

export async function getAll(): Promise<OrderWithProduct[]> {
  const query = `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productIds 
  FROM Trybesmith.products AS p
  INNER JOIN Trybesmith.orders AS o
  ON o.id = p.order_id
  GROUP BY order_id`;
  
  const [orders] = await connection.execute(query);
  
  return orders as OrderWithProduct[];
}