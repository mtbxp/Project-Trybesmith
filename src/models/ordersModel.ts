import { Torders } from '../types/types';
import connection from './connection';

const getAllOrders = async (): Promise<Torders[]> => {
  const [orders] = await connection.execute(
    `SELECT o.id AS id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds 
    FROM Trybesmith.orders AS o 
    INNER JOIN Trybesmith.products AS p ON p.order_id = o.id GROUP BY o.id;`,
  );
  return orders as Torders[];
};

export default {
  getAllOrders,
};