import { RowDataPacket } from 'mysql2';
import connect from './connection';
import { OrderInterface } from '../interfaces/order.interface';

export default class OrderModel {
  private connection = connect;

  async getOrders(): Promise<OrderInterface[]> {
    const [orders] = await this.connection.execute<OrderInterface[] & RowDataPacket[]>(
      `SELECT orders.id, orders.user_id AS userId, JSON_ARRAYAGG(products.id)
      AS productsIds FROM Trybesmith.orders INNER JOIN Trybesmith.products 
      ON Trybesmith.orders.id = Trybesmith.products.order_id GROUP BY orders.id;`,
    );

    return orders;
  }
}
