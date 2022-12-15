import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Order } from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const orders = await this.connection.execute(`
      SELECT 
        o.id, 
        o.user_id as 'userId',
        JSON_ARRAYAGG(p.id) as 'productsIds'
      FROM Trybesmith.orders AS o
      INNER JOIN Trybesmith.products AS p
      ON o.id = p.order_id
      GROUP BY o.id;`);
    const [rows] = orders;
    return rows as Order[];
  }

  public async create(order: Order): Promise<Order> {
    const { user_id: userId } = order;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
      [userId],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, user_id: userId };
  }
}