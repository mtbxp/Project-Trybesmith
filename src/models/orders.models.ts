import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { TOrder } from '../types';

async function getAllOrders(): Promise<TOrder[]> {
  const query = `
  SELECT ord.id, ord.user_id AS userId,
  JSON_ARRAYAGG(pdt.id) AS productsIds
  FROM Trybesmith.orders as ord
  INNER JOIN Trybesmith.products AS pdt
  WHERE ord.id = pdt.order_id
  GROUP BY ord.id`;
  const [orders] = await connection
    .execute <TOrder[] & RowDataPacket[]>(query);

  return orders;
}

export default {
  getAllOrders,
};