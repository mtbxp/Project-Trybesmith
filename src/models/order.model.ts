import IOrder from '../interfaces/IOrder';
import mysql from './connection';

export default class OrderModel {
  private connection = mysql;

  async getAllOrders(): Promise<IOrder[]> {
    const [rows] = await this.connection.execute(
      `SELECT orders.id, orders.user_id AS userId,
      JSON_ARRAYAGG(products.id) AS productsIds
      FROM Trybesmith.orders as orders
      INNER JOIN Trybesmith.products AS products
      WHERE orders.id = products.order_id
      GROUP BY orders.id`,
    );

    return rows as IOrder[];
  }
}