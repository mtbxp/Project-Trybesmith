import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Orders, CreateOrderReturn } from '../interfaces';
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

export async function create(id: number, products: [number]): Promise<CreateOrderReturn> {
  const insertIntoOrders = `INSERT INTO ${TABLE1} (user_id) VALUES (?)`;
  const value = [id];

  const [{ insertId }] = await connection.execute<ResultSetHeader>(insertIntoOrders, value);

  const insertIntoProducts = `UPDATE ${TABLE2} SET order_id = ? WHERE id = ?`;

  await Promise.all(products.map((item: number) => connection
    .execute(insertIntoProducts, [insertId, item])));

  return { userId: id, productsIds: products };
}
