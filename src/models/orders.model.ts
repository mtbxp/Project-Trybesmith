import { RowDataPacket } from 'mysql2';
import { Order } from '../types/types';
import connection from './connection';

const getAll = async (): Promise<Order[]> => {
  const [orders] = await connection
    .execute<RowDataPacket[] & Order[]>(`SELECT ord.id as id, ord.user_id as userId, 
    JSON_ARRAYAGG(p.id) as productsIds
    FROM Trybesmith.orders as ord
    INNER JOIN Trybesmith.products as p
    ON p.order_id = ord.id
    GROUP BY ord.id;`);
    // query fazendo array
  return orders;
};

export default {
  getAll,
};