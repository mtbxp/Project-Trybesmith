import { RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { TOrders } from '../types';

export async function getAll():Promise<TOrders[]> {
  const [result] = await connection.execute<RowDataPacket[] &
  TOrders[]>(`SELECT odr.id, odr.user_id AS userId, JSON_ARRAYAGG(P.order_id) AS productsIds 
  FROM Trybesmith.orders AS odr 
  INNER JOIN Trybesmith.products AS P 
  ON odr.id = P.order_id group by odr.id`);
  return result;
}

export function create() {

}