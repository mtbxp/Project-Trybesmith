import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { Orders } from '../interfaces/interfaces';

const getAllOrders = async () => {
  const [orders] = await connection
    .execute<RowDataPacket[] & Orders[]>(`SELECT ord.id as id, ord.user_id as userId, 
    JSON_ARRAYAGG(p.id) as productsIds
    FROM Trybesmith.orders as ord
    INNER JOIN Trybesmith.products as p
    ON p.order_id = ord.id
    GROUP BY ord.id;`);
  return orders;
};

export default {
  getAllOrders,
};