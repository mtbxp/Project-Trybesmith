import { Pool, RowDataPacket } from 'mysql2/promise';
import { Orders } from '../interfaces/orders.interface';
import connection from './connection';

class OrdersModel {
  public connection: Pool;
  
  constructor() {
    this.connection = connection;
  }

  async create(productsIds: number[], user: number) {
    const placeHolder = productsIds.map(() => '?').join(',');
    const [result] = await this.connection.execute(
      'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
      [user],
    );
    const { insertId: orderId } = result as { insertId: number };
    await this.connection.execute(
      `UPDATE Trybesmith.products SET order_id = ? WHERE id IN (${placeHolder})`,
      [orderId, ...productsIds],
    );
    return {
      userId: user,
      productsIds,
    };
  }

  public async getAll(): Promise<Orders[]> {
    const [ordersAll] = await 
    this.connection.execute<(Orders & RowDataPacket)[]>(
      `SELECT o.id, o.user_id as userId,
      json_arrayagg(p.id) AS productsIds FROM Trybesmith.orders
      AS o INNER JOIN Trybesmith.products as p ON o.id = p.order_id GROUP BY o.id`);
    return ordersAll;
  }
}
export default OrdersModel;