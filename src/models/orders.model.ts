import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const result = await this.connection.execute(    
      `SELECT ord.id, ord.user_id AS userId, JSON_ARRAYAGG(pro.id) as productsIds
      FROM Trybesmith.orders AS ord INNER JOIN Trybesmith.products AS pro
      WHERE ord.id = pro.order_id GROUP BY ord.id`,
    );

    const [rows] = result;
    
    return rows as Order[];
  }
}