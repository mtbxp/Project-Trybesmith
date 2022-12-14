import { Pool } from 'mysql2/promise';

export default class LoginModel {
  public connection;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll() {
    const [orders] = await this.connection.execute(
      `SELECT 
          o.id, o.user_id,JSON_ARRAYAGG(p.id) as productsId
      FROM
          Trybesmith.orders AS o
              INNER JOIN
          Trybesmith.products p
      WHERE
          o.id = p.order_id
      GROUP BY o.id;`,
    );
    console.log(orders);
    
    return orders;
  }
}