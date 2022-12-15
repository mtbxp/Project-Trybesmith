import { Pool } from 'mysql2/promise';
import Order from '../interfaces/orders.interface';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getOrders(): Promise<Order[]> {
    const [orders] = await this.connection.execute(
      `SELECT o.id, o.user_id AS userId,
      JSON_ARRAYAGG(p.id) AS productsIds
      FROM Trybesmith.orders as o
      INNER JOIN Trybesmith.products AS p
      WHERE o.id = p.order_id
      GROUP BY o.id`,
    );
    return orders as Order[];
  }
}