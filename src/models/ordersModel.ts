import connection from './connection';
import { Order } from '../interfaces/Product';

const getAllOrders = async (): Promise<Order[]> => {
  const query = `SELECT orders.id, orders.user_id as userId, JSON_ARRAYAGG(products.id) as productsIds
  FROM Trybesmith.orders
  INNER JOIN Trybesmith.products
  ON orders.id = products.order_id
  group by orders.id;`;
  const [result] = await connection.execute(query);
  return result as Order[];
};

export default {
  getAllOrders,
};