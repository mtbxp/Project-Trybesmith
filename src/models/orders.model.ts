import { RowDataPacket } from 'mysql2';
import connection from './connection';

export default async function getAll() {
  const [result] = await connection.execute<RowDataPacket[]>(
    `SELECT O.id, O.user_id as userId, json_arrayagg(P.id) as productsIds 
    FROM Trybesmith.orders AS O 
    INNER JOIN Trybesmith.products as P ON O.id = P.order_id
    GROUP BY O.id;`,
  );
  return result;
}