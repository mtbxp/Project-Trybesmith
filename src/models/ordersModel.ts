import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
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

export async function insert(newOrder: TOrder) {
  const { userId, productsIds } = newOrder;

  try {
    const [{ insertId }] = await connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
      [userId],
    );

    await Promise.all(productsIds.map(async (id) => {
      await connection.execute<ResultSetHeader>(
        'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
        [insertId, id],
      );
    }));
  } catch (e) {
    console.log(e);
  }
}