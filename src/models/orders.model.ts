import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { TOrders } from '../types';

export async function getAll():Promise<TOrders[]> {
  const [result] = await connection.execute<RowDataPacket[] &
  TOrders[]>(`SELECT odr.id, odr.user_id AS userId, JSON_ARRAYAGG(P.id) AS productsIds 
  FROM Trybesmith.orders AS odr 
  INNER JOIN Trybesmith.products AS P 
  ON odr.id = P.order_id group by P.order_id`);
  return result;
}

export async function create(id:number) {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
    [id],
  );
  return insertId;
}