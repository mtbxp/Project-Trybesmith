import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { Orders } from '../interfaces/interfaces';

const getProducts = async (id: number):Promise<number[]> => {
  const [products] = await connection
    .execute<RowDataPacket[] & number[]>(`SELECT id FROM Trybesmith.products
    WHERE order_id = ?`, [id]);
  const list = products.map((p) => p.id);
  return list;
};

const getAllOrders = async () => {
  const [orders] = await connection
    .execute<RowDataPacket[]>('SELECT * FROM Trybesmith.orders;');
  const ordersWithProducts = await Promise.all(orders.map(async (order): Promise<Orders> => { 
    const products = await getProducts(order.id);
    await Promise.all(products);
    return {
      id: order.id,
      userId: order.user_id,
      productsIds: products,
    };
  }));
  return ordersWithProducts;
};

export default {
  getAllOrders,
};