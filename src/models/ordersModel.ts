import { RowDataPacket } from 'mysql2';
import Order from '../types/Orders';
import connection from './connection';

const getAllOrders = async (): Promise<Order[]> => {
  const [result] = await connection.execute<RowDataPacket[] & Order[]>(
    `SELECT orders.id AS id, users.id AS userId, JSON_ARRAYAGG(products.id) AS productsIds
     FROM Trybesmith.orders AS orders
     INNER JOIN Trybesmith.products AS products ON orders.id = products.order_id
     INNER JOIN Trybesmith.users AS users ON orders.user_id = users.id
     GROUP BY products.order_id;`,
  );
  return result;
};

export default { getAllOrders };