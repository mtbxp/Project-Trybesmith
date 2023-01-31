import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Order, OrderCreated } from '../interfaces/product';
import { User } from '../interfaces/user';

const getAllOrders = async (): Promise<Order[]> => {
  const q = `SELECT orders.id, orders.user_id as userId, 
  JSON_ARRAYAGG(products.id) as productsIds
  FROM Trybesmith.orders
  INNER JOIN Trybesmith.products
  ON orders.id = products.order_id
  group by orders.id;`;
  const [result] = await connection.execute(q);
  return result as Order[];
};

const updateProduct = async (productId: number, idOrder: number): Promise<number> => {
  const q = 'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?';
  await connection.execute<ResultSetHeader>(q, [idOrder, productId]);
  return productId;
};

const newOrder = async (currentUser: User, productsIds: number[]) => {
  const q = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?)';
  const [order] = await connection.execute<ResultSetHeader>(q, [currentUser.id]);
  await Promise.all(productsIds.map(async (productId) => {
    const result = await updateProduct(productId, order.insertId);
    return result;
  }));
  const result = { userId: currentUser.id, productsIds };
  return result as OrderCreated;
};

export default {
  getAllOrders,
  newOrder,
};