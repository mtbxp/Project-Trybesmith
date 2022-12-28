import { RowDataPacket } from 'mysql2/promise';
import { Order } from '../interfaces/Order.interface';
import connection from './connection';

const getAll = async (): Promise<Order[]> => {
  const [result] = await connection.execute<RowDataPacket[] & Order[]>(
    `
    SELECT orders.id,
    orders.user_id AS userId,
    JSON_ARRAYAGG(products.id) AS productsIds 
    FROM Trybesmith.orders AS orders
    INNER JOIN Trybesmith.products AS products
    ON orders.id = products.order_id
    GROUP BY orders.id; 
    `,
  );
  return result;
};

export default { getAll };