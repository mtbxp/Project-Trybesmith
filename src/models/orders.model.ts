import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Order } from '../interfaces/orders.interface';
import connection from './connection';

const getAllOrdersModel = async (): Promise<Order[]> => {
  const query = `SELECT
  o.id,
  o.user_id AS userId,
  JSON_ARRAYAGG(p.id) AS productsIds
  FROM Trybesmith.orders AS o
  INNER JOIN Trybesmith.products as p
  WHERE o.id = p.order_id
  GROUP BY o.id;`;
  const [result] = await connection.execute<RowDataPacket[] & Order[]>(query);
  return result;
};

const registerNewOder = async (userId: number, productIds: number[]) => {
  const query = `INSERT INTO Trybesmith.orders (user_id)
  VALUES (?)`;

  const query2 = `UPDATE Trybesmith.products
  SET order_id = ?
  WHERE id = ?`;
  const [result] = await connection.execute<ResultSetHeader>(query, [userId]);

  productIds.forEach(async (id) => {
    await connection.execute<ResultSetHeader>(query2, [result.insertId, id]);
  });
};

export default {
  getAllOrdersModel,
  registerNewOder,
};
