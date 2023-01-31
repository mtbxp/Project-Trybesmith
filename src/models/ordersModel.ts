import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Order } from '../types';
import connection from './connection';

const getAllOrders = async (): Promise<Order[]> => {
  const result = await connection.execute<RowDataPacket[] & Order[]>(
    `SELECT O.id, O.user_id as userId, JSON_ARRAYAGG(P.id) as productsIds
    FROM Trybesmith.orders as O
    INNER JOIN Trybesmith.products as P
    ON O.id = P.order_id
    GROUP BY O.id
    ORDER BY O.user_id`,
  );

  const [rows] = result;
  return rows;
};

const createOrder = async (userId: number, productsIds: number[]): Promise<Order> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUES (?);', 
    [userId],
  );
  await Promise.all(
    productsIds.map((id) => connection.execute(
      'UPDATE Trybesmith.products SET order_id = (?) WHERE id = (?);',
      [insertId, id],
    )),
  );
  return { userId, productsIds };
};

export default {
  getAllOrders,
  createOrder,
};