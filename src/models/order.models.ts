import { /* ResultSetHeader, */ RowDataPacket } from 'mysql2';
import connection from './connection';
import { Order } from '../interfaces/interface';

async function getAllOrders(): Promise<Order[]> {
  const [result] = await connection.execute<RowDataPacket[] & Order[]>(
    'SELECT * FROM Trybesmith.orders',
  );

  /* const [result] = await connection.execute<RowDataPacket[] & Order[]>(
    'SELECT id, user_id, (SELECT JSON_ARRAYAGG(order_id)) FROM Trybesmith.orders',
  ); */
  return result;
}

export default {
  // getProductById,
  getAllOrders,
  // updateProduct,
};