import { Pool, ResultSetHeader } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

class OrderModel {
  public pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  public async getAll(): Promise<Order[]> {
    const [orders] = await this.pool.execute(
      `SELECT 
        orders.id,
        user_id AS userId,
        JSON_ARRAYAGG(products.id) AS productsIds
      FROM
        Trybesmith.orders
          INNER JOIN
        Trybesmith.products ON orders.id = products.order_id
      GROUP BY order_id
      ORDER BY orders.id`,
    );

    return orders as Order[];
  }

  public async create(userId: number): Promise<number> {
    const [{ insertId: id }] = await this.pool.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.orders (user_id) VALUE (?)', 
      [userId],
    );

    return id;
  }
}

export default OrderModel;
