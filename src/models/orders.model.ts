import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import Order from '../types/Order';
import connection from './connection';

const getOrders = async (): Promise<Order[]> => {
  const [result] = await connection.execute<RowDataPacket[] & Order[]>(
    `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) as productsIds
    FROM Trybesmith.orders AS o INNER JOIN Trybesmith.products AS p
    WHERE o.id = p.order_id GROUP BY o.id`,
  );

  return result;
};

const createOrder = async (userId: number, productsIds: number[]) => {
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>('INSERT INTO Trybesmith.orders (user_id) values (?)', [userId]);

  const arreyItens = productsIds.map(async (productId) => {
    await connection
      .execute<ResultSetHeader>(
      'UPDATE Trybesmith.products SET order_id = (?) where id = (?)',
      [insertId, productId],
    );
  });

  await Promise.all(arreyItens);
};

export default {
  getOrders,
  createOrder,
};