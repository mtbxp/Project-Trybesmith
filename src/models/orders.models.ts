import { Pool } from 'mysql2/promise';
import Order from '../interfaces/orders.interface';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<Order[]> => {
    const [queryResult] = await this.connection.execute(
      `SELECT ord.id, ord.user_id AS userId, JSON_ARRAYAGG(prod.id) AS productsIds
        FROM Trybesmith.orders as ord
        INNER JOIN Trybesmith.products as prod ON prod.order_id = ord.id
        GROUP BY ord.id`,
    );
    return queryResult as Order[];
  };
}