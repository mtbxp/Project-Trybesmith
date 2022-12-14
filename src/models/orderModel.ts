import { RowDataPacket } from 'mysql2';
import { IOrder } from '../interfaces/IOrder';
import mysql from './connection';

export default class OrderModel {
  public connection = mysql;

  public getAll = async (): Promise<IOrder[]> => {
    const [result] = await this.connection.execute<IOrder[] & RowDataPacket[]>(`
    SELECT 
        o.id, 
        o.user_id as userId,
          JSON_ARRAYAGG(p.id) as productsIds
      FROM Trybesmith.orders as o
      INNER JOIN Trybesmith.products as p
      WHERE o.id = p.order_id
      GROUP BY o.id;`);

    return result;
  };
}
