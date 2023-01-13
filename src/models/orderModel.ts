import { RowDataPacket } from 'mysql2';
import mysql from './connection';
import IOrder from '../interface/IOrder';

export default class OrderModel {
  connection = mysql;

  public async findAll(): Promise<IOrder[]> {
    const [resultFindAll] = await this.connection
      .execute<IOrder[] & RowDataPacket[]>(`SELECT
      Orders.id, Orders.user_id AS userId, JSON_ARRAYAGG(Products.id) AS productsIds
      FROM Trybesmith.orders AS Orders 
      INNER JOIN Trybesmith.products AS Products ON Orders.id = Products.order_id
      GROUP BY Orders.id
      ORDER BY Orders.user_id;`);
    return resultFindAll;
  }
}