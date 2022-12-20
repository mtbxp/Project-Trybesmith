import { ResultSetHeader } from 'mysql2';
import { Order, User } from '../types/index';
import connection from './connection';

export async function getAllOrders() {
  const [orders] = await connection
    .execute(`SELECT orders.id as id, orders.user_id As userId, 
  JSON_ARRAYAGG(products.id) As productsIds
  FROM Trybesmith.orders as orders
  INNER JOIN Trybesmith.products As products
  WHERE orders.id = products.order_id   
  GROUP BY orders.id`);

  return orders as Order[];
}

export async function updateProductId(productId: number, orderId: number): Promise<number> {
  const update = `UPDATE Trybesmith.products
  SET order_id = ?
  WHERE id = ?`;
  await connection.execute<ResultSetHeader>(update, [orderId, productId]);
  return productId;
}

export async function createOrder(user: User, productsIds: number[]) {
  const orders = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?)';
  const [order] = await connection.execute<ResultSetHeader>(orders, [user.id]);
  await Promise.all(productsIds
    .map(async (productId) => {
      const result = await updateProductId(productId, order.insertId);
      return result;
    }));

  return { userId: user.id, productsIds };
}
