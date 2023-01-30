import { Pool } from 'mysql2/promise';
import { AllOrders } from '../interfaces';

export default class OrderModel {
  public connection : Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async allGetOrders(): Promise<AllOrders[]> { //  Dica: Pesquise na documentação oficial do MySQL sobre a função de agregação JSON_ARRAYAGG, ela pode ser bem útil.
    const query = `SELECT a.id as id, a.user_id as userId,
    JSON_ARRAYAGG(b.id)
    as productsIds
    FROM Trybesmith.orders as a
    INNER JOIN Trybesmith.products as b
    ON b.order_id = a.id
    GROUP BY a.id`;

    const [result] = await this.connection.execute(query);

    return result as AllOrders[];
  }
}