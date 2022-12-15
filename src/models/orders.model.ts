import { Pool } from 'mysql2/promise';
import Order from '../interfaces/orders.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const result = await this.connection.execute(
      'SELECT orders.id, orders.user_id AS userId, JSON_ARRAYAGG(products.id) AS productsIds'
      + ' FROM Trybesmith.orders AS orders'
      + ' INNER JOIN Trybesmith.products AS products'
      + ' WHERE orders.id = products.order_id'
      + ' GROUP BY orders.id',
    );
    const [rows] = result;
    return rows as Order[];
  }
}