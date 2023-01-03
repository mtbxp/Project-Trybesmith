import { ResultSetHeader } from 'mysql2';
import { Order } from '../types';
import connection from './connection';

export default {
  findAll: async () => {
    const [orders] = await connection.execute<(Order[] & ResultSetHeader)>(
      `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds FROM Trybesmith.orders o
          INNER JOIN Trybesmith.products p ON p.order_id = o.id
       GROUP BY o.id`);

    return orders;
  },
  
  insert: async (userId: number, productsIds: number[]) => {
    const [{ insertId }] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
      [userId],
    );

    const promises = productsIds.map((id) => (
      connection.execute(
        'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?', 
        [insertId, id],
      )
    ));

    await Promise.all(promises);
  },
};