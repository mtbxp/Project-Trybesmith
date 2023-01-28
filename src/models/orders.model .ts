import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { AddOrder } from '../types';
import connection from './connection';

const listAllOrders = async () => {
  const query = `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id)
  AS productsIds FROM Trybesmith.orders AS o
  INNER JOIN Trybesmith.products AS p
  ON o.id = p.order_id
  GROUP BY o.id`;
  const [rows] = await connection.execute<RowDataPacket[]>(query);
  return rows;
};

const addOrder = async (userId: any, order: AddOrder): Promise<void> => {
  const query = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [userId]);
  const orderId = result.insertId;
  Promise.all(order.productsIds.map(async (productId) => {
    const queryProducts = 'UPDATE Trybesmith.products SET order_Id = ? WHERE id = ?';
    await connection
      .execute<ResultSetHeader>(queryProducts, [orderId, productId]);
  }));
};

export {
  addOrder,
  listAllOrders,
};