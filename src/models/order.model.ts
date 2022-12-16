import connection from './connection';
import { TOrder } from '../interfaces/types';

export default async function getAll(): Promise<TOrder[]> {
  const [result] = await connection.execute(`
  SELECT orders.id, orders.user_id as userId,
  JSON_ARRAYAGG(products.id) as productsIds
  FROM Trybesmith.orders
  INNER JOIN Trybesmith.products 
  ON Trybesmith.orders.id = Trybesmith.products.order_id
  GROUP BY orders.id;`);

  return result as TOrder[];
}
