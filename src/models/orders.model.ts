import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { TOrders, TNewOrder } from '../types';
import connection from './connection';

const getOrders = async ():Promise<TOrders> => {
  const [result] = await connection.execute<RowDataPacket[]>(
    `SELECT 
    o.id,
    o.user_id AS userId,
    JSON_ARRAYAGG(p.id) AS productsIds
  FROM
    Trybesmith.orders AS o
  INNER JOIN Trybesmith.products AS p ON o.id = p.order_id
 GROUP BY o.id`,
  );
  
  return result as TOrders;
};

const createOrder = async (newOrder:TNewOrder) => {
  const { userId, productsIds } = newOrder;
  
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
    [userId],
  );
  
  await Promise.all(productsIds.map(async (id) => {
    await connection.execute<ResultSetHeader>(
      'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
      [insertId, id],
    );
  }));
  return newOrder;
};

export default { getOrders, createOrder };