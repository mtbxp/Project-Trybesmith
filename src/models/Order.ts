import { Pool, ResultSetHeader } from 'mysql2/promise';
import { OrderEtProducts } from '../types';

export default class OrderModel {
  public connection;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async listAll(): Promise<OrderEtProducts[]> {
    const query = `
    SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.orders o
    INNER JOIN Trybesmith.products p
    WHERE o.id = p.order_id
    GROUP BY o.id;`;
    const [orders] = await this.connection.execute(query);
    return orders as OrderEtProducts[];
  }

  public async post(productsIds: number[], userId: number)
    : Promise<{ userId: number; productsIds: number[] }> {
    const query = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?)';
    const updateQuery = 'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [userId]);
    Promise.all(productsIds.map((id: number) => (
      this.connection.execute(updateQuery, [insertId, id])
    )));
    return { userId, productsIds };
  }
}