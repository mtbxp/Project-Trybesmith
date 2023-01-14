import { Orders } from '../interfaces/Order';
import connection from './connection';

const getAllOrders = async (): Promise<Orders[]> => {
  const [result] = await connection.execute(
    `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) as productsIds
    FROM Trybesmith.orders AS o INNER JOIN Trybesmith.products AS p
    WHERE o.id = p.order_id GROUP BY o.id`,
  );
  return result as Orders[];
};

export default {
  getAllOrders,
};