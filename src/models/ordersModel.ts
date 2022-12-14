import { RowDataPacket } from 'mysql2/promise';
import { TOrder } from '../types';
import connection from './connection';

export async function getAll(): Promise<TOrder[]> {
  const [orders] = await connection
    .execute<RowDataPacket[]>(
    `SELECT
      o.id, 
      o.user_id as userId,
    JSON_ARRAYAGG(p.id) as productsIds
    FROM Trybesmith.orders as o
    INNER JOIN Trybesmith.products as p
    ON o.id = p.order_id
    GROUP BY o.id;`,
  );
  return orders as TOrder[];
}

export default getAll;