import { RowDataPacket } from 'mysql2';
import { Orders } from '../interfaces/order.interface';
import connection from './connection';

const getAll = async (): Promise<Orders[]> => {
  const query = `SELECT 
  o.id,
  o.user_id AS userId,
  JSON_ARRAYAGG(p.id) AS productsIds
  FROM Trybesmith.orders AS o
  LEFT JOIN Trybesmith.products AS p
  ON o.id = p.order_id
  GROUP BY o.id;`;
  const [rows] = await connection.execute<RowDataPacket[] & Orders[]>(query);
  return rows;
};

export default { getAll };