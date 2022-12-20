import { ResultSetHeader } from 'mysql2';
import { Pool } from 'mysql2/promise';
import connection from './connection';
import { OrdersInterface } from '../interfaces/orders.interfaces';

class Orders {
  private connection: Pool;

  userId?: number;

  productId?: number[];

  constructor(userId: number, productId: number[]) {
    this.userId = userId;
    this.productId = productId;
    this.connection = connection;
  }

  async save(userId: number, productsId: number[]): Promise<number> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
      [userId],
    );
    await Promise.all(productsId.map(async (id) => {
      await this.connection.execute<ResultSetHeader>(
        'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
        [insertId, id],
      );
    }));
    return insertId as number;
  }

  public async getAll(): Promise<OrdersInterface[]> {
    const [orders] = await this.connection
      .execute(`SELECT orders.id, orders.user_id as userId,
      JSON_ARRAYAGG(products.id) as productsIds
      FROM Trybesmith.orders
      INNER JOIN Trybesmith.products 
      ON Trybesmith.orders.id = Trybesmith.products.order_id
      GROUP BY orders.id;`);
    return orders as OrdersInterface[];
  }
}

export default Orders;