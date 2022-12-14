import { RowDataPacket } from 'mysql2/promise';
import { InterfaceOrder } from '../interfaces';
import connection from './connection';

const getAllOrders = async (): Promise<InterfaceOrder[]> => {
  const [orders] = await connection
    .execute<RowDataPacket[] & InterfaceOrder[]>(
    `SELECT O.id, O.user_id as userId,
    JSON_ARRAYAGG(P.id) as productsIds
    FROM Trybesmith.orders as O
    INNER JOIN Trybesmith.products as P
    ON O.id = P.order_id
    GROUP BY O.id;`,
  );
  return orders;
};

export default {
  getAllOrders,
};
