import { Pool } from 'mysql2/promise';
import Orders from '../interfaces/orders.interfaces';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders(): Promise<Orders[]> {
    const result = await this.connection.execute(
      `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
      FROM Trybesmith.orders AS o
      INNER JOIN Trybesmith.products AS p
      WHERE o.id = p.order_id
      GROUP BY o.id`,
    );
    const [rows] = result;
    return rows as Orders[];
  }
}