import { Pool } from 'mysql2/promise';
import { OrderReturned } from '../utils/types/Order.types';

export default class OrderModel {
  constructor(private connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<OrderReturned[]> {
    const sql = `SELECT orders.id as id, orders.user_id as userId,
    JSON_ARRAYAGG(products.id) as productsIds
    FROM Trybesmith.orders as orders
    INNER JOIN Trybesmith.products as products
    ON products.order_id = orders.id
    GROUP BY orders.id`;

    const result = await this.connection.query(sql);
    const [rows] = result;
    return rows as OrderReturned[];
  }
}
