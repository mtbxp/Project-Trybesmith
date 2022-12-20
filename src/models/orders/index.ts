import { RowDataPacket } from 'mysql2';
import { TOrder } from '../../types';
import connection from '../connection';

const getAllOrdersWihtProductsModel = async (): Promise<TOrder[]> => {
  const [orders] = await connection
    .execute<RowDataPacket & TOrder[]>(`
    SELECT o.id, o.user_id as userId, JSON_ARRAYAGG(p.id) as productsIds
    FROM Trybesmith.orders AS o
    INNER JOIN Trybesmith.products AS p 
    WHERE o.id = p.order_id
    GROUP BY o.id`);
  return orders;
};

export default getAllOrdersWihtProductsModel;