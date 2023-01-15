import connection from './connection';
import { Order } from '../interfaces/order.interface';

const getAll = async ():Promise <Order[]> => {
  const [allOrders] = await connection.execute(`
  SELECT o.id, o.user_id as userId,
  JSON_ARRAYAGG(p.id) as productsIds
  FROM Trybesmith.orders as o
  INNER JOIN Trybesmith.products AS p
  ON o.id = p.order_id
  group by o.id;`);
  console.log(allOrders);
  return allOrders as Order[];
};

export default {
  getAll,
};