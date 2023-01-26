import { RowDataPacket } from 'mysql2';
import { TOrder } from '../types/index';
import connection from './connection';

const getAll = async (): Promise<TOrder[]> => {
  const query = `SELECT o.id, o.user_id AS userId,
  JSON_ARRAYAGG(p.id) AS productsIds
  FROM Trybesmith.orders AS o
  INNER JOIN Trybesmith.products AS p
  ON o.id = p.order_id
  GROUP BY o.id;`;
  const [orders] = await connection.execute<RowDataPacket[] & TOrder[]>(query);
  return orders;
};

// fonte - https://dev.mysql.com/doc/refman/5.7/en/aggregate-functions.html#function_json-arrayagg
export default {
  getAll,
};
