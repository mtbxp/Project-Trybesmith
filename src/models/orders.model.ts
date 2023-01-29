import { RowDataPacket } from 'mysql2';
import { TOrders } from '../types';
import connection from './connection';

const getAllOrders = async (): Promise<TOrders[]> => {
  const [rows] = await connection.execute<RowDataPacket[] & TOrders[]>(
    `SELECT orders.id, orders.user_id AS userId,
    JSON_ARRAYAGG(products.id) AS productsIds FROM
    Trybesmith.orders INNER JOIN Trybesmith.products
    WHERE orders.id = products.order_id GROUP BY orders.id`,
  );
  return rows;
};

export default { getAllOrders };
