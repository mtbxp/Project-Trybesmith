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

  async save(): Promise<number> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.orders (userId, productId) VALUES (?, ?)',
      [this.userId, this.productId],
    );
    return insertId as number;
  }

  public async getAll(): Promise<OrdersInterface[]> {
    const [orders] = await this.connection.execute('SELECT * FROM Trybesmith.orders');
    return orders as OrdersInterface[];
  }
}

export default Orders;