import connection from './connection';
import { Order } from '../interfaces/orders';

const getAllOrders = async (): Promise<Order[]> => {
  const query = `SELECT o.id, o.user_id AS userId,
  JSON_ARRAYAGG(p.id) AS productsIds
  FROM Trybesmith.orders AS o
  INNER JOIN Trybesmith.products AS p
  WHERE o.id = p.order_id GROUP BY o.id`;
  const [result] = await connection.execute(query);
  return result as Order[];
};

export default {
  getAllOrders,
};