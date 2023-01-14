import { RowDataPacket } from 'mysql2';
import { IOrder } from '../interfaces';
import connection from './connection';

const getAllOrders = async (): Promise<IOrder[]> => {
  const [orders] = await connection
    .execute<RowDataPacket[] & IOrder[] >(
    `SELECT 
      O.id, O.user_id AS userId, JSON_ARRAYAGG(P.id) AS productsIds
    FROM
      Trybesmith.orders AS O
          INNER JOIN
      Trybesmith.products AS P WHERE O.id = P.order_id
    GROUP BY O.id;`,
  );
  
  return orders;
};

export default {
  getAllOrders,
};
