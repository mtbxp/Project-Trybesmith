import { Pool } from 'mysql2/promise';
import Order from '../interfaces/orderInterface';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders(): Promise<Order[]> {
    const [result] = await this.connection.execute(
      `SELECT o.id,
      o.user_id AS 'userId',
      JSON_ARRAYAGG(p.id) AS 'productsIds'
      FROM Trybesmith.orders AS o
      INNER JOIN Trybesmith.products AS p
      ON o.id = p.order_id
      GROUP BY o.id`,
    );

    return result as Order[];
  }
}
