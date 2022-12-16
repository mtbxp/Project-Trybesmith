import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { OrdersArray } from '../types/types';
import connection from './connection';

export async function findOrders(): Promise<OrdersArray[]> {
  const queryString = `
  SELECT O.id, O.user_id as userId, json_arrayagg(P.id) as productsIds FROM Trybesmith.orders AS O 
  INNER JOIN Trybesmith.products as P ON O.id = P.order_id
  GROUP BY O.id;`;
  const [list] = await connection.execute<RowDataPacket[]>(queryString);
  return list as OrdersArray[];
}

export async function addOrder(productsIds: number[], userId: number) {
  const insertQuery = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?)';
  const [{ insertId }] = await connection.execute<ResultSetHeader>(insertQuery, [userId]);
  const productsQuery = 'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?';
  Promise.all(productsIds
    .map((productId: number) => connection.execute(productsQuery, [insertId, productId])));
  return { userId, productsIds };
}