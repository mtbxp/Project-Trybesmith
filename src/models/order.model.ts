import connection from './connection';
import Order from '../types/Order';

const listAllOrders = async () => {
  const [result] = await connection.execute(`SELECT o.id, o.user_id AS userId, 
  json_arrayagg(p.id) AS productsIds
  FROM Trybesmith.orders AS o
  INNER JOIN Trybesmith.products AS p
  ON o.id = p.order_id
  GROUP BY o.id;`);

  return result as Order[];
};

export default { listAllOrders };
