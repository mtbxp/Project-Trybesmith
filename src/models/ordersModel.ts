import { RowDataPacket } from 'mysql2';
import { Order } from '../types';
import connection from './connection';

const getAllOrders = async (): Promise<Order[]> => {
  const result = await connection.execute<RowDataPacket[] & Order[]>(
    `SELECT O.id, O.user_id as userId, JSON_ARRAYAGG(P.id) as productsIds
    FROM Trybesmith.orders as O
    INNER JOIN Trybesmith.products as P
    ON O.id = P.order_id
    GROUP BY O.id
    ORDER BY O.user_id`,
  );

  const [rows] = result;
  return rows;
};

export default {
  getAllOrders,
};