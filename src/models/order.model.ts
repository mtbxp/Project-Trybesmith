import { Pool } from 'mysql2/promise';

export default class OrderModel {
  public connection;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll() {
    const [orders] = await this.connection.execute(
      `SELECT o.id, o.user_id AS userId,JSON_ARRAYAGG(p.id) as productsId
      FROM Trybesmith.orders AS o INNER JOIN Trybesmith.products AS p
      WHERE o.id = p.order_id GROUP BY o.id;`,
    );    
    return orders;
  }
}