import connection from './connection';
import { Order } from '../types/Order';

const getAllOrders = async (): Promise<Order[]> => {
  const [result] = await connection.execute(
    `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) as productsIds
    FROM Trybesmith.orders AS o INNER JOIN Trybesmith.products AS p
    WHERE o.id = p.order_id GROUP BY o.id`,
  );
  return result as Order[];
};

export default {
  getAllOrders,
};