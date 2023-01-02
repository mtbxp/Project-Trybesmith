import { RowDataPacket } from 'mysql2';
import { Order } from '../interfaces/order.interface';
import connection from './connection';

const getAllOrdersModel = async (): Promise<Order[]> => {
  const query = `SELECT order.id, order.user_id AS userId,
  JSON_ARRAYAGG(products.id) AS productsIds
  FROM Trybesmith.orders AS order
  INNER JOIN Trybesmith.products as products
  WHERE order.id = products.order_id
  GROUP BY order.id;`;

  const [result] = await connection.execute<RowDataPacket[]>(query);

  return result as Order[];
};

export default getAllOrdersModel;
