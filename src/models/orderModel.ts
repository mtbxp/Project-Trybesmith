import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { TOrder } from '../types';

const getOrders = async (): Promise<TOrder[]> => {
  const [orders] = await connection.query<RowDataPacket[]>(
    `SELECT orders.id, orders.user_id AS userId, JSON_ARRAYAGG(products.id) AS productsIds
    FROM Trybesmith.orders INNER JOIN Trybesmith.products
    ON orders.id = products.order_id
    GROUP BY orders.id;`,
  );
  return orders as TOrder[];
};

export default {
  getOrders,
};
