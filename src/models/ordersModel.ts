import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Order } from '../types/Order';
import { OrderData } from '../types/orderData';

const getAllOrders = async (): Promise<Order[]> => {
  const [result] = await connection.execute(
    `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) as productsIds
    FROM Trybesmith.orders AS o INNER JOIN Trybesmith.products AS p
    WHERE o.id = p.order_id GROUP BY o.id`,
  );
  return result as Order[];
};

const newOrder = async (order: OrderData): Promise<OrderData> => {
  const { productsIds, userId } = order;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
    [userId],
  );
  const updateOrder = productsIds.map((productId) => connection.execute<ResultSetHeader>(
    'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
    [insertId, productId],
  ));
  await Promise.all(updateOrder);
  return { userId, productsIds };
};

export default {
  getAllOrders,
  newOrder,
};