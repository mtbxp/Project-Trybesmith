import { Pool } from 'mysql2/promise';
import IOrder from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders(): Promise<IOrder[]> {
    const allOrders = await this.connection.execute('SELECT * FROM Trybesmith.orders;');
    return allOrders as IOrder[];
  }
}