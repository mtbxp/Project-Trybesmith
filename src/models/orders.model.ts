import { RowDataPacket } from 'mysql2/promise';
import { TOrder } from '../types';
import connection from './connection';

const getAll = async (): Promise<TOrder[]> => {
  const [result] = await connection.execute<RowDataPacket[] & TOrder[]>(
    `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
      FROM Trybesmith.orders o
      INNER JOIN Trybesmith.products p ON p.order_id = o.id
      GROUP BY o.id`,
  );

  return result;
};

export default { getAll };