import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { TProduct, TProductOrder } from '../types';
import connection from './connection';

export async function getAll(): Promise<TProduct[]> {
  const [products] = await connection.execute<RowDataPacket[] & TProduct[]>(
    'SELECT * FROM Trybesmith.products;',
  );
    
  return products;
}

export async function getAllOrders(): Promise<TProductOrder[]> {
  const [orders] = await connection.execute<RowDataPacket[] & TProductOrder[]>(
    `SELECT
      o.id,
      o. user_id as userId,
      p.id as productId,
      p.order_id as orderId
    FROM
      Trybesmith.products AS p
    INNER JOIN
      Trybesmith.orders AS o ON o.id = p.order_id
    ORDER BY id`,
  );
    
  return orders;
}

export async function updateProduct(orderId: TProductOrder, id: TProduct) {
  await connection.execute(
    'UPDATE Trybesmith.products SET order_id = (?) WHERE id = (?)',
    [orderId, id],
  );
}
  
export async function insertProduct({ name, amount }: TProduct) {
  await connection.execute(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
}

export async function insertOrder(userId: TProductOrder) {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
    [userId],
  );

  return insertId;
}