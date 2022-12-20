import { ResultSetHeader } from 'mysql2';
import connection from './connection';

export default async function getAllOrders() {
  const [allOrders] = await connection.execute<ResultSetHeader>(
    `SELECT orders.id, orders.user_id AS userId, 
    JSON_ARRAYAGG(products.id) AS productsIds 
    FROM Trybesmith.orders AS orders 
    INNER JOIN Trybesmith.products AS products 
    WHERE orders.id = products.order_id 
    GROUP BY orders.id`,
  ); 

  return allOrders;
}