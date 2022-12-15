import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Order, OrderCreated } from '../interfaces/Product';
import { User } from '../interfaces/User';

const getAllOrders = async (): Promise<Order[]> => {
  const query = `SELECT orders.id, orders.user_id as userId, 
  JSON_ARRAYAGG(products.id) as productsIds
  FROM Trybesmith.orders
  INNER JOIN Trybesmith.products
  ON orders.id = products.order_id
  group by orders.id;`;
  const [result] = await connection.execute(query);
  return result as Order[];
};

const updateProduct = async (productId: number, idOrder: number): Promise<number> => {
  const query = 'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?';
  await connection.execute<ResultSetHeader>(query, [idOrder, productId]);
  return productId;
};

const addOrder = async (currentUser: User, productsIds: number[]) => {
  const query = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?)';
  const [order] = await connection.execute<ResultSetHeader>(query, [currentUser.id]);
  await Promise.all(productsIds.map(async (productId) => {
    const result = await updateProduct(productId, order.insertId);
    return result;
  }));
  const result = { userId: currentUser.id, productsIds };
  return result as OrderCreated;
};

export default {
  getAllOrders,
  addOrder,
};