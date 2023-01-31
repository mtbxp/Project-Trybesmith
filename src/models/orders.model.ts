import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { TLoggedUser, TOrders } from '../types';
import connection from './connection';

const getAllOrders = async (): Promise<TOrders[]> => {
  const [rows] = await connection.execute<RowDataPacket[] & TOrders[]>(
    `SELECT orders.id, orders.user_id AS userId,
    JSON_ARRAYAGG(products.id) AS productsIds FROM
    Trybesmith.orders INNER JOIN Trybesmith.products
    WHERE orders.id = products.order_id GROUP BY orders.id`,
  );
  return rows;
};

const updateProduct = async (productId: number, orderId: number): Promise<number> => {
  await connection.execute<ResultSetHeader>(
    'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
    [orderId, productId],
  );
  return productId;
};

const createOrder = async (orderInfo: TLoggedUser) => {
  const { productsIds, loggedUser } = orderInfo;

  const [createdOrder] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
    [loggedUser.id],
  );

  await Promise.all(productsIds.map(async (productId) => {
    const result = await updateProduct(productId, createdOrder.insertId);
    return result;
  }));

  return { userId: loggedUser.id, productsIds };
};

export default { getAllOrders, createOrder };
