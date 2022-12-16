import { RowDataPacket } from 'mysql2';
import { Orders } from '../interfaces';
import connection from './connection';

const getAllOrders = async (): Promise<Orders[]> => {
  const query = `
  SELECT o.id AS id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
  FROM Trybesmith.products AS p
  INNER JOIN Trybesmith.orders AS o
  ON p.order_id = o.id
  GROUP BY p.order_id;
  `;

  const [result] = await connection.execute<RowDataPacket[] & Orders[]>(query);
  console.log(result);

  return result;
};

export default {
  getAllOrders,
};