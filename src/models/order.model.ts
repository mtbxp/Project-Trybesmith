import { Pool } from 'mysql2/promise';
import IOrder from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders(): Promise<IOrder[]> {
    const [allOrders] = await this.connection.execute(
      `SELECT 
        O.id,
        O.user_id as userId,
        JSON_ARRAYAGG(P.id) as productsIds
      FROM 
        Trybesmith.orders O
      INNER JOIN
        Trybesmith.products P
      ON O.id = P.order_id
      GROUP BY O.id;`,
    );
    return allOrders as IOrder[];
  }
}