import { RowDataPacket } from 'mysql2/promise';
import connection from './connection';

export default async function getOrdersModel():
Promise<RowDataPacket[]> {
  const [products] = await connection
    .execute(`SELECT o.id, user_id AS userId,
      JSON_ARRAYAGG(p.id) AS productsIds
      FROM Trybesmith.orders AS o
      INNER JOIN Trybesmith.products AS p
      ON o.id = p.order_id
      GROUP BY o.id`);
  return products as RowDataPacket[];
}
