import { RowDataPacket } from 'mysql2';
import { Order } from '../interfaces';
import connection from './connection';

export default class OrderModel {
  getAll = async (): Promise<Order[]> => {
    const [orders] = await connection.execute<RowDataPacket[]>(
      `SELECT 
        o.id, 
        o.user_id AS userId,
        JSON_ARRAYAGG(p.id) AS productsIds
      FROM Trybesmith.orders AS o
      INNER JOIN Trybesmith.products AS p
      WHERE o.id = p.order_id
      GROUP BY o.id;`,
    );

    return orders as Order[];
  };
}