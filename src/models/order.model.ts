import { RowDataPacket } from 'mysql2';
import { Orders } from '../interfaces';
import connection from './connection';

const TABLE1 = 'Trybesmith.orders';
const TABLE2 = 'Trybesmith.products';

export async function getAll(): Promise<Orders[]> {
  const query = `SELECT o.id, o.user_id as userId, JSON_ARRAYAGG(p.id) as productsIds
  FROM ${TABLE1} as o
  INNER JOIN ${TABLE2} as p
  ON p.order_id = o.id
  GROUP BY o.id`;

  const [result] = await connection.execute<RowDataPacket[] & Orders>(query);

  return [result];
}

export async function oi() {
  return 'oi';
}
