import { ResultSetHeader, RowDataPacket } from 'mysql2';

import connection from './connection';
import { Order, OrderInput } from '../types';

async function createOrder({ productsIds, userId }: OrderInput): Promise<number> {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUE (?);',
    [userId],
  );

  await Promise.all(
    productsIds.map((id) =>
      connection.execute('UPDATE Trybesmith.products SET order_id = ? WHERE id = ?;', [
        insertId,
        id,
      ])),
  );

  return insertId;
}

async function getAllOrders(): Promise<Order[]> {
  const [orders] = await connection.execute<(RowDataPacket & Order)[]>(`
    SELECT o.id, o.user_id as userId, JSON_ARRAYAGG(p.id) productsIds
    FROM Trybesmith.orders AS o
            INNER JOIN Trybesmith.products p on o.id = p.order_id
    GROUP BY o.id;
  `);

  return orders;
}

export { createOrder, getAllOrders };
