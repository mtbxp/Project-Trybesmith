import { RowDataPacket } from 'mysql2/promise';
import { Orders } from '../types';
import conn from './connection';

const getAllOrders = async (): Promise<Orders[]> => {
  const [result] = await conn.execute<RowDataPacket[] & Orders[]>(
    `SELECT
      orders.id, orders.user_id as userId, JSON_ARRAYAGG(products.id) as productsIds
    FROM Trybesmith.orders
    INNER JOIN Trybesmith.products
    WHERE orders.id = products.order_id
    GROUP BY orders.id`,
  );
  return result as Orders[];
};

export default {
  getAllOrders,
};