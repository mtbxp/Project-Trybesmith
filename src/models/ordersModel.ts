import { RowDataPacket } from 'mysql2';
import OrderInterface from '../interfaces/orders.ifc';
import connect from './connection';

export default class OrdersModel {
  private connection = connect;
  
  async getAllOrders(): Promise<OrderInterface[]> {
    const [allOrders] = await this.connection.execute<OrderInterface[] & RowDataPacket[]>(
      `SELECT orders.id, orders.user_id as userId,
      JSON_ARRAYAGG(products.id) as productsIds
      FROM Trybesmith.orders
      INNER JOIN Trybesmith.products 
      ON Trybesmith.orders.id = Trybesmith.products.order_id
      GROUP BY orders.id;`,
    );

    return allOrders;
  }
}
