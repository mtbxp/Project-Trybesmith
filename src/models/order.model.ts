import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const getOrders = async () => {
  const query = `SELECT orders.id, 
  orders.user_id as userId, JSON_ARRAYAGG(products.id) as productsIds
  FROM Trybesmith.orders
  INNER JOIN Trybesmith.products
  ON orders.id = products.order_id
  GROUP BY orders.id;`;

  const [orders] = await connection.execute<ResultSetHeader>(query);
  return orders;
};

export default getOrders;