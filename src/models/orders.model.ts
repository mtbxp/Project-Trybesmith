import { RowDataPacket } from 'mysql2';
import { OrdersArray } from '../types/types';
import connection from './connection';

export default async function findOrders(): Promise<OrdersArray[]> {
  const queryString = `
  SELECT O.id, O.user_id as userId, json_arrayagg(P.id) as productsIds FROM Trybesmith.orders AS O 
  INNER JOIN Trybesmith.products as P ON O.id = P.order_id
  GROUP BY O.id;`;
  const [list] = await connection.execute<RowDataPacket[]>(queryString);
  return list as OrdersArray[];
}