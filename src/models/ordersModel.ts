import { RowDataPacket } from 'mysql2';
import { TOrder } from '../types';
import connection from './connection';

export const getProducts = async (id: number): Promise<number[]> => {
  const [products] = await connection
    .execute<RowDataPacket[] & number[]>(`SELECT id FROM Trybesmith.products 
    WHERE order_id = ?`, [id]);
  const result = products.map(((product) => product.id));
  return result;
};

export const getAllOrders = async (): Promise<TOrder[]> => {
  const [orders] = await connection
    .execute<RowDataPacket[]>('SELECT * FROM Trybesmith.orders;');
  const orderProducts = await Promise.all(orders.map(async (order): Promise<TOrder> => { 
    const result = await getProducts(order.id);
    await Promise.all(result);
    return {
      id: order.id,
      userId: order.user_id,
      productsIds: result,
    };
  }));
  return orderProducts;
};