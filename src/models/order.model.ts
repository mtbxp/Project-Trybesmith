import { ResultSetHeader } from 'mysql2';
import connection from './connection';

export const getOrders = async () => {
  const query = `SELECT orders.id, 
  orders.user_id as userId, JSON_ARRAYAGG(products.id) as productsIds
  FROM Trybesmith.orders
  INNER JOIN Trybesmith.products
  ON orders.id = products.order_id
  GROUP BY orders.id;`;

  const [orders] = await connection.execute<ResultSetHeader>(query);
  return orders;
};

export const addOrder = async (productsIds: number[], userId: number)
:Promise <{ userId: number; productsIds: number[] }> => {
  // console.log(userId);
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
    [userId],
  );
  await Promise.all(productsIds.map(async (id) => {
    await connection.execute<ResultSetHeader>(
      'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
      [insertId, id],
    );
  }));
  return { userId, productsIds };
};