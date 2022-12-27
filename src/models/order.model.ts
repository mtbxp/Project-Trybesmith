import { Pool } from 'mysql2/promise';
import Order from '../interfaces/orders.interface';

// deixo aqui registrado meu agradecimento ao Manoel que me ajudou a realizar esse requisito onde não estava entendeo usar o metodo JSON_ARRAYAGG

export default class OrderModel {
  public connection;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders(): Promise<Order[]> {
    const [orders] = await this.connection.execute(
      `SELECT o.id, o.user_id AS userId,JSON_ARRAYAGG(p.id) as productsIds
      FROM Trybesmith.orders AS o INNER JOIN Trybesmith.products AS p
      WHERE o.id = p.order_id GROUP BY o.id;`,
    );
    return orders as Order[];
  }
}