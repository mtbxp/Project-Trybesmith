import { Pool, ResultSetHeader } from 'mysql2/promise';
// import IOrder from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  async getAll() {
    const orders = await this.connection.execute<ResultSetHeader>(
      `SELECT o.id, o.user_id as userId, JSON_ARRAYAGG(p.id) productsIds
      FROM Trybesmith.orders AS o
              INNER JOIN Trybesmith.products p on o.id = p.order_id
      GROUP BY o.id`,
    ); 
    const [allOrders] = orders;
    return allOrders;
  }
}