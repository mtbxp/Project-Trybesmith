import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Order } from '../utils/interfaces/orderInterface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<Order[] | void> => {
    const [orders] = await this.connection.execute(`SELECT orders.id, orders.user_id as userId,
    JSON_ARRAYAGG(products.id) as productsIds
    FROM Trybesmith.orders
    INNER JOIN Trybesmith.products
    ON orders.id = products.order_id
    group by orders.id;`);

    return orders as Order[];
  };

  public create = async (userId: number, productsIds: number[]): Promise<void> => {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.orders (user_id) VALUE (?)',
      [userId],
    );

    const orders = productsIds.map((id) => this.connection.execute<ResultSetHeader>(
      'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
      [insertId, id],
    ));

    await Promise.all(orders);
  };
}
