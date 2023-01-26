import { Pool, RowDataPacket } from 'mysql2/promise';
import Orders from '../interfaces/orders.interface';
import connection from './connection';

class OrdersModel {
  public connection: Pool;
  
  constructor() {
    this.connection = connection;
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