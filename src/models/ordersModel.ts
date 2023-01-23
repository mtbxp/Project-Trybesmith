import { RowDataPacket } from 'mysql2';
import connection from './connection';
import IOrder from '../interfaces/orders.interface';

// eslint-disable-next-line import/prefer-default-export
export async function getAllOrders(): Promise<IOrder[]> {
  const [result] = await connection.execute<(IOrder & RowDataPacket)[]>(
    `SELECT o.id, user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.orders AS o INNER JOIN Trybesmith.products AS p
    ON o.id = p.order_id GROUP BY o.id`);
  return result as IOrder[];
}