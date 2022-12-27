import { RowDataPacket } from 'mysql2/promise';
import { TOrders } from '../types';
import connection from './connection';

const getOrders = async ():Promise<TOrders> => {
  const [result] = await connection.execute<RowDataPacket[]>(
    `SELECT 
    o.id,
    o.user_id AS userId,
    JSON_ARRAYAGG(p.id) AS productsIds
  FROM
    Trybesmith.orders AS o
  INNER JOIN Trybesmith.products AS p ON o.id = p.order_id
 GROUP BY o.id`,
  );
  
  return result as TOrders;
};

export default { getOrders };