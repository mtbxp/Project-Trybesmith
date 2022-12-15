import { RowDataPacket } from 'mysql2';
import { IOrders } from '../interfaces/orders';

import connection from './connection';

const getAll = async () :Promise<IOrders[]> => {
  const [row] = await connection.execute < RowDataPacket[] 
  & IOrders[]>(
    `SELECT orders.id,
     orders.user_id AS userId,
     JSON_ARRAYAGG(products.id) AS productsIds
     FROM Trybesmith.orders AS orders
     INNER JOIN  Trybesmith.products AS products
     WHERE orders.id = products.order_id
     GROUP BY orders.id`,
  );
  return row;
};

export default getAll;
