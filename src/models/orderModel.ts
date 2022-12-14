import { RowDataPacket } from 'mysql2';
import mysql from './connection';
import { IOrder } from '../interfaces/IOrder';

export default class OrderModel {
  private connection = mysql;

  async getAllOrders(): Promise<IOrder[]> {
    const [rows] = await this.connection.execute<IOrder[] & RowDataPacket[]>(
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

// select json_object(id, user_Id, 'productsIds' value json_arrayagg())