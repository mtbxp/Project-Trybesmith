import { Pool, RowDataPacket } from 'mysql2/promise';
// import { Orders/*UserOrdersResponse*/} from '../interfaces/orders.interface';
import { Orders } from '../interfaces/orders.interface';
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

  // public async create(orderId: number): Promise<UserOrdersResponse> {
  //   const [[result]] = await this.connection.execute<UserOrdersResponse & RowDataPacket[]>(
  //     `SELECT o.user_id AS userId, json_arrayagg(p.id) AS productsIds
  //     FROM Trybesmith.orders AS o INNER JOIN Trybesmith.products as p ON o.id = p.order_id
  //     WHERE o.id = ? GROUP BY o.id`,
  //     [orderId],
  //   );
  //   return result;
  // }
}

export default OrdersModel;