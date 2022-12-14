import { RowDataPacket } from 'mysql2/promise';
import { TOrders } from './interfaces';
import connection from './connection';

const selectAllOrders = async (): Promise<TOrders[]> => {
  const [result] = await connection.execute<RowDataPacket[]>(
    `SELECT 
      o.id,
      o.user_id AS userId,
      JSON_ARRAYAGG(p.id) AS productsIds
    FROM 
      Trybesmith.orders as o,
      Trybesmith.products as p WHERE (p.order_id = o.id) GROUP BY o.id;`,
  );
  return result as TOrders[];
};

export default {
  selectAllOrders,
};
