import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IOrder, Order } from '../types';
import connection from './connection';

const getAll = async (): Promise<IOrder[]> => {
  const query = `SELECT o.id, o.user_id AS userId,
    JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.orders AS o
    INNER JOIN Trybesmith.products AS p
    ON o.id = p.order_id
    GROUP BY o.id;`;

  // Fonte: https://dev.mysql.com/doc/refman/5.7/en/aggregate-functions.html#function_json-arrayagg
    
  const [orders] = await connection.execute<RowDataPacket[] & IOrder[]>(query);
  return orders;
};

const create = async (orderWithToken: Order): Promise<IOrder> => {
  const { productsIds, user } = orderWithToken;
  const { id: userId } = user;

  const queryOrder = `INSERT INTO Trybesmith.orders (user_id)
    VALUES (?)`; 
  const queryProduct = `UPDATE Trybesmith.products 
    SET order_id = ?
    WHERE id = ?`;
  const values = [userId];

  const [{ insertId: orderId }] = await connection.execute<ResultSetHeader>(queryOrder, values);

  await Promise.all(productsIds.map(async (productId) => {
    await connection.execute<ResultSetHeader>(queryProduct, [orderId, productId]);
  }));

  const newOrder: IOrder = { userId, productsIds };
  return newOrder;
};

export default {
  getAll,
  create,
};
