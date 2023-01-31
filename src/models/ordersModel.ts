import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { Order } from '../types/Order';
import { OrderData } from '../types/orderData';
import { Users } from '../types/User';

const getAllOrders = async (): Promise<Order[]> => {
  const [result] = await connection.execute(
    `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) as productsIds
    FROM Trybesmith.orders AS o INNER JOIN Trybesmith.products AS p
    WHERE o.id = p.order_id GROUP BY o.id`,
  );
  return result as Order[];
};

const listAllUsers = async (): Promise<Users[]> => {
  const [result] = await connection
    .execute<RowDataPacket[] & Users[]>('SELECT * FROM Trybesmith.users');
  return result;
};

const newOrder = async (productsId: OrderData, id: number): Promise<OrderData> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
    [id],
  );
  const updateOrder = productsId.productsIds.map((productId) => connection.execute<ResultSetHeader>(
    'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
    [insertId, productId],
  ));
  await Promise.all(updateOrder);
  const result = {
    productsIds: productsId.productsIds,
    userId: id,
  };
  return result;
};

export default {
  getAllOrders,
  newOrder,
  listAllUsers,
};