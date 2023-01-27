import { RowDataPacket } from 'mysql2';
import connection from './connection';

const addProduct = async () => {};

const listAllOrders = async () => {
  const query = `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id)
  AS productsIds FROM Trybesmith.orders AS o
  INNER JOIN Trybesmith.products AS p
  ON o.id = p.order_id
  GROUP BY o.id`;
  const [rows] = await connection.execute<RowDataPacket[]>(query);
  return rows;
};

export {
  addProduct,
  listAllOrders,
};