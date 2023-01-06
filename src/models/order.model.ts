import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders(): Promise<Order[]> {
    const query = `SELECT ord.id, ord.user_id AS userId,
      prod.order_id AS productsIds
      FROM Trybesmith.orders AS ord
      INNER JOIN Trybesmith.products AS prod
      ON ord.id = prod.order_id;`;
    
    const result = await this.connection.execute(query);
    const [rows] = result;
    return rows as Order[];
  }
}
