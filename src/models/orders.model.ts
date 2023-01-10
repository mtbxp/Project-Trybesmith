import connection from './connection';
import Order from '../interfaces/order.interface';

const listAllOrders = async (): Promise<Order[]> => {
  const orders = await connection.execute(
    `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) as productsIds
    FROM Trybesmith.orders AS o
    INNER JOIN Trybesmith.products AS p
    WHERE o.id = p.order_id GROUP BY o.id`,
  );
  const [rows] = orders;
  return rows as Order[];    
};

export default {
  listAllOrders,
};