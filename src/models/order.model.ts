import { RowDataPacket } from 'mysql2';
import { IOrder } from '../types';
import connection from './connection';

const getAll = async (): Promise<IOrder[]> => {
  const query = `SELECT o.id, o.user_id AS userId,
    JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.orders AS o
    INNER JOIN Trybesmith.products AS p
    ON o.id = p.order_id
    GROUP BY o.id;`;

  // Fonte: https://dev.mysql.com/doc/refman/5.7/en/aggregate-functions.html#function_json-arrayagg
    
  const [orders] = await connection.execute<RowDataPacket[] & IOrder[]>(query);
  return orders;
};

export default {
  getAll,
};
