import { RowDataPacket } from 'mysql2/promise';
import { OrdersResponse } from '../interfaces/orders.interfaces';

import connection from './connection';

const getOrders = async (): Promise<OrdersResponse[]> => {
  const SQL = `SELECT ord.id, ord.user_id AS userId, JSON_ARRAYAGG(prud.id) AS productsIds
    FROM Trybesmith.orders AS ord INNER JOIN
    Trybesmith.products AS prud ON ord.id = prud.order_id GROUP BY ord.id;`;
  const [response] = await connection.execute<RowDataPacket[] & OrdersResponse[]>(SQL);
  return response;
};

export default { getOrders };