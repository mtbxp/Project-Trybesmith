import { RowDataPacket } from 'mysql2';
import { TOrder } from '../types';
import connection from './connection';

const createOrder = async ():Promise<TOrder[]> => {
  const [order] = await connection.execute<RowDataPacket[] 
  & TOrder[]>(`SELECT orders.id,
  orders.user_id AS userId,
  JSON_ARRAYAGG(products.id) AS productsIds
  FROM Trybesmith.orders AS orders
  INNER JOIN  Trybesmith.products AS products
  WHERE orders.id = products.order_id
  GROUP BY orders.id`);

  return order;
};

export default {
  createOrder,
};