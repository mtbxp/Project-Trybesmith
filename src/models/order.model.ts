import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const result = await this.connection.execute('SELECT a.id, a.user_id as userId,' 
    + 'JSON_ARRAYAGG(b.id) as productsIds FROM Trybesmith.orders' 
    + ' as a inner join Trybesmith.products as b on a.id = b.order_id group by a.id');
    const [rows] = result;
    return rows as Order[];
  }
}