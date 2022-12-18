import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { TOrder } from '../interfaces/types';

export async function getAll(): Promise<TOrder[]> {
  const [result] = await connection.execute(`
  SELECT orders.id, orders.user_id as userId,
  JSON_ARRAYAGG(products.id) as productsIds
  FROM Trybesmith.orders
  INNER JOIN Trybesmith.products 
  ON Trybesmith.orders.id = Trybesmith.products.order_id
  GROUP BY orders.id;`);

  return result as TOrder[];
}

export async function insertOrder(userId: number, productsId: number[]) {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUE (?)',
    [userId],
  );
  await Promise.all(productsId.map(async (id) => (
    connection.execute(
      'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
      [insertId, id],
    )
  )));
  return insertId;
}
