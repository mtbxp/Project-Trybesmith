import { RowDataPacket } from 'mysql2';
import connection from './connection';
import Orders from '../interface/orders.interface';

const ordersGetAllModel = async (): Promise<Orders[]> => {
  const [result] = await connection.execute<(Orders & RowDataPacket)[]>(
    `
    SELECT 
      ord.id,
      ord.user_id AS userId,
      JSON_ARRAYAGG(pro.id) AS productsIds
    FROM
    Trybesmith.orders AS ord
        INNER JOIN
    Trybesmith.products AS pro ON pro.order_id = ord.id
    GROUP BY ord.id;
    `);

  return result;
};

export default ordersGetAllModel;