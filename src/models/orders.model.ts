import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Order, User } from '../types/types';
import connection from './connection';

const getAll = async (): Promise<Order[]> => {
  const [orders] = await connection
    .execute<RowDataPacket[] & Order[]>(`SELECT ord.id as id, ord.user_id as userId, 
    JSON_ARRAYAGG(p.id) as productsIds
    FROM Trybesmith.orders as ord
    INNER JOIN Trybesmith.products as p
    ON p.order_id = ord.id
    GROUP BY ord.id;`);
    // query fazendo array
  return orders;
};

const updateProductId = async (productId: number, idOrder: number): Promise<number> => {
  const productIdQuery = `UPDATE Trybesmith.products 
  SET order_id = ?
  WHERE id = ?`;
  await connection.execute<ResultSetHeader>(productIdQuery, [idOrder, productId]);
  return productId;
};

const create = async (user: User, productsIds: number[]) => {
  const queryOrder = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?)';
  const [order] = await connection.execute<ResultSetHeader>(queryOrder, [user.id]);
  await Promise.all(productsIds
    .map(async (productId) => {
      const value = await updateProductId(productId, order.insertId);
      return value;
    }));

  return { userId: user.id, productsIds };
};

export default {
  getAll,
  create,
};