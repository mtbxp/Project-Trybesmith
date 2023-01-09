import { RowDataPacket, Pool } from 'mysql2/promise';
import { IOrders } from '../interfaces/Orders';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async findAll(): Promise<IOrders[]> {
    console.log('ENTROU NA MODEL: ');
    
    const [result] = await
    this.connection.execute<(RowDataPacket[] & IOrders[])>(
      `SELECT or.id, or.user_id AS userId, 
    JSON_ARRAYAGG(pro.id) AS productIds 
    FROM Trybesmith.orders AS or 
    INNER JOIN Trybesmith.products AS pro 
    WHERE or.id = pro.order_id
    GROUP BY or.id`);

    return result;
  }
}