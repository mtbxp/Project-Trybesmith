import { Pool, ResultSetHeader } from 'mysql2/promise';
import Order from '../interfaces/orders.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const result = await this.connection.execute(
      `SELECT o.id, o.user_id AS userId, 
      JSON_ARRAYAGG(p.id) AS productsIds 
      FROM Trybesmith.orders AS o 
      INNER JOIN Trybesmith.products AS p 
      ON p.order_id = o.id
      GROUP BY o.id`,
    );
    const [rows] = result;

    return rows as Order[];
  }

  public async create(user: number, productsIds: number[]): Promise<void> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
      [user],
    );

    const saveOrders = productsIds.map((ids) => this.connection.execute<ResultSetHeader>(
      'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
      [insertId, ids],
    ));

    await Promise.all(saveOrders);
  }
}