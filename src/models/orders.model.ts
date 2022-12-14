import { RowDataPacket } from 'mysql2';

import connection from './connection';
import { Order } from '../types';

async function getAllOrders(): Promise<Order[]> {
  const [orders] = await connection.execute<(RowDataPacket & Order)[]>(`
    SELECT o.id, o.user_id as userId, JSON_ARRAYAGG(p.id) productsIds
    FROM Trybesmith.orders AS o
            INNER JOIN Trybesmith.products p on o.id = p.order_id
    GROUP BY o.id;
  `);

  return orders;
}

export { getAllOrders };
