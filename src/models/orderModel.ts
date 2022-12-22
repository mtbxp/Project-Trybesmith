import { RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { Order } from '../helpers/types';

async function getAll(): Promise<Order[]> {
  const [result] = await connection.execute<RowDataPacket[]>(
    `
    SELECT 
      o.id AS id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM
      Trybesmith.orders AS o
        INNER JOIN
      Trybesmith.products AS p ON o.id = p.order_id
    GROUP BY p.order_id;
    `,
  );

  return result as Order[];
}

export default {
  getAll,
};
