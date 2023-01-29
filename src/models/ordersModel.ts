import { RowDataPacket } from 'mysql2/promise';
import { Torders } from '../types';
import connection from './connection';

const listOrders = async (): Promise<Torders[]> => {
  const [result] = await connection.execute<RowDataPacket[] & Torders[]>(
    // 'SELECT * FROM Trybesmith.orders',
    `SELECT 
    o.id,
    o.user_id AS userId,
    JSON_ARRAYAGG(p.id) AS productsIds
  FROM
    Trybesmith.orders AS o
  INNER JOIN Trybesmith.products AS p ON o.id = p.order_id
 GROUP BY o.id`,
  );
  return result as Torders[];
};

export default { listOrders };
