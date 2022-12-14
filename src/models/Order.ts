import { Pool } from 'mysql2/promise';
import { OrderEtProducts } from '../types';

export default class OrderModel {
  public connection;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async listAll(): Promise<OrderEtProducts[]> {
    const query = `
    SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.orders o
    INNER JOIN Trybesmith.products p
    WHERE o.id = p.order_id
    GROUP BY o.id;`;
    const [orders] = await this.connection.execute(query);
    return orders as OrderEtProducts[];
  }
}