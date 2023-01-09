import { RowDataPacket, Pool } from 'mysql2/promise';
import { IOrders } from '../interfaces/Orders';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async findAll(): Promise<IOrders[]> {    
    const [result] = await
    this.connection.execute<(RowDataPacket[] & IOrders[])>(
      `SELECT ord.id, ord.user_id AS userId, 
    JSON_ARRAYAGG(pro.id) AS productsIds 
    FROM Trybesmith.orders AS ord 
    INNER JOIN Trybesmith.products AS pro 
    WHERE ord.id = pro.order_id
    GROUP BY ord.id`);

    return result;
  }
}