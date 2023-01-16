// ./src/models/orders.models.ts

import { RowDataPacket } from 'mysql2';
import mysql from './connection';
import OrderInterface from '../interfaces/OrderInterface';

export default class OrderModel {
  private connection = mysql;

  async getOrders(): Promise<OrderInterface[]> {
    const [rows] = await this.connection.execute<OrderInterface[] & RowDataPacket[]>(
      `SELECT 
      Trybesmith.orders.id, 
        user_Id as userId, 
      json_arrayagg(Trybesmith.products.id ) as productsIds
    FROM Trybesmith.orders 
    INNER JOIN Trybesmith.products ON Trybesmith.orders.id = Trybesmith.products.order_id
    GROUP BY Trybesmith.orders.id`,
    );

    return rows;
  }
}
