import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { TOrder } from '../types/index';
import connection from './connection';

const getAll = async (): Promise<TOrder[]> => {
  const query = `SELECT o.id, o.user_id AS userId,
  JSON_ARRAYAGG(p.id) AS productsIds
  FROM Trybesmith.orders AS o
  INNER JOIN Trybesmith.products AS p
  ON o.id = p.order_id
  GROUP BY o.id;`;
  const [orders] = await connection.execute<RowDataPacket[] & TOrder[]>(query);
  return orders;
};

const create = async (userId: number, productsIds: number[]) => {
  const query = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?);';
  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [userId]);

  await Promise.all(productsIds.map(async (id) => {
    const queryUpdate = 'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?;';
    await connection.execute<ResultSetHeader>(queryUpdate, [insertId, id]);
  }));

  return { userId, productsIds };
};

// fonte - https://dev.mysql.com/doc/refman/5.7/en/aggregate-functions.html#function_json-arrayagg
export default {
  getAll,
  create,
};
