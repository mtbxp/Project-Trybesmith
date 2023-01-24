import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import IOrder from '../interfaces/orders.interface';

async function getAllOrders(): Promise<IOrder[]> {
  const [result] = await connection.execute<(IOrder & RowDataPacket)[]>(
    `SELECT o.id, user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.orders AS o INNER JOIN Trybesmith.products AS p
    ON o.id = p.order_id GROUP BY o.id`);
  return result as IOrder[];
}

async function NewOrderAndUptade(productsIds: number[], userId: number): Promise<object> {
  const result = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
    [userId],
  );
  const [{ insertId }] = result;
  const updateProducts = productsIds.map((productId) =>
    connection.execute<ResultSetHeader>(
      'UPDATE Trybesmith.products SET order_id=? WHERE id=?',
      [insertId, productId],
    ));

  await Promise.all(updateProducts);

  return { userId, productsIds };
}

export default {
  getAllOrders,
  NewOrderAndUptade,
};