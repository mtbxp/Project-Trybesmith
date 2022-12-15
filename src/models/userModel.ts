import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { TPeople, TOrders } from '../types';

export async function createUser(user: TPeople) {
  const { username, vocation, level, password } = user;
  const query = `
  INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)`;

  const [result] = await connection
    .execute<ResultSetHeader>(query, [username, vocation, level, password]);
  const { insertId } = result;
  return {
    id: insertId,
    username,
    vocation,
    level,
    password,
  };
}

export async function getAllOrders(): Promise<TOrders[]> {
  const query = `SELECT o.id, o.user_id AS userId,
      JSON_ARRAYAGG(p.id) AS productsIds
      FROM Trybesmith.orders as o
      INNER JOIN Trybesmith.products AS p
      WHERE o.id = p.order_id
      GROUP BY o.id`;

  const [orders] = await connection.execute<ResultSetHeader & TOrders[]>(query);

  return orders;
}