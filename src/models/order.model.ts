import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

export default class OrderModel {
  public connection;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const [orders] = await this.connection.execute(
      `SELECT o.id, o.user_id AS userId,JSON_ARRAYAGG(p.id) as productsIds
      FROM Trybesmith.orders AS o INNER JOIN Trybesmith.products AS p
      WHERE o.id = p.order_id GROUP BY o.id;`,
    );    
    return orders as Order[];
  }
}