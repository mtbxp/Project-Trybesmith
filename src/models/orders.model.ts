import IOrders from '../interfaces/orders.interface';
import connection from './connection';

const getAllOrders = async (): Promise<IOrders[]> => {
  const [result] = await connection.execute(
    `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds 
    FROM Trybesmith.products AS p
    INNER JOIN Trybesmith.orders AS o
    ON o.id = p.order_id
    GROUP BY order_id`,
  );
  return result as IOrders[];
};

export default {
  getAllOrders,
};