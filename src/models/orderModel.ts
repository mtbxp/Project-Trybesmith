import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Order } from '../interfaces';
import connection from './connection';

export default class OrderModel {
  getAll = async (): Promise<Order[]> => {
    const [orders] = await connection.execute<RowDataPacket[]>(
      `SELECT 
        o.id, 
        o.user_id AS userId,
        JSON_ARRAYAGG(p.id) AS productsIds
      FROM Trybesmith.orders AS o
      INNER JOIN Trybesmith.products AS p
      WHERE o.id = p.order_id
      GROUP BY o.id;`,
    );

    return orders as Order[];
  };

  create = async (productsIds: number[], userId: number): Promise<void> => {
    const orderQuery = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?)';
    const productsQuery = 'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?';

    const [{ insertId }] = await connection.execute<ResultSetHeader>(orderQuery, [userId]);
    console.log(insertId);

    await Promise.all(productsIds
      .map(async (productId: number) => connection.execute<ResultSetHeader>(
        productsQuery, 
        [insertId, productId],
      )));
  };
}