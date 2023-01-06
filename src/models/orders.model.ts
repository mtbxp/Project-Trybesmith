import { Pool } from 'mysql2/promise';
import Orders from '../interfaces/orders.interface';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Orders[]> {
    const result = await this.connection.execute(
      `SELECT orders.id, orders.user_id as userId, 
    JSON_ARRAYAGG(products.id) as productsIds
    FROM Trybesmith.orders
    INNER JOIN Trybesmith.products
    ON orders.id = products.order_id
    group by orders.id;`,
    );
    const [rows] = result;
    return rows as Orders[];
  }
}