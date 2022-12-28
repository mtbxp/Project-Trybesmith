// import { RowDataPacket } from 'mysql2/promise';
import { Iorders } from '../interfaces';
import connection from './connection';

export default async function getAll(): Promise<Iorders[]> {
  const [orders] = await connection.execute(
    `SELECT Trybesmith.orders.id, Trybesmith.orders.user_id AS userId, 
    JSON_ARRAYAGG(Trybesmith.products.id) AS productsIds
    FROM Trybesmith.orders
    INNER JOIN Trybesmith.products
    WHERE Trybesmith.orders.id = Trybesmith.products.order_id
    GROUP BY Trybesmith.orders.id;`,
  );
  return orders as Iorders[];
}
