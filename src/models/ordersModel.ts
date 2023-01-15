import { RowDataPacket } from 'mysql2/promise';
import { TOrder } from './allInterfaces/interfaceOrder';
import connection from './connection';

const getOrderModel = async (): Promise<TOrder[]> => {
  const [result] = await connection.execute<RowDataPacket[] & TOrder[]>(
    `
    SELECT orders.id,
    orders.user_id AS userId,
    JSON_ARRAYAGG(products.id) AS productsIds 
    FROM Trybesmith.orders AS orders
    INNER JOIN Trybesmith.products AS products
    ON orders.id = products.order_id
    GROUP BY orders.id; 
    `,
  );
  return result;
};

export default { getOrderModel };