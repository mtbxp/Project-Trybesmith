import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IOrder, INewOrder } from '../interfaces/order.interface';

export default class OrderModel {
  constructor(public connection: Pool) {}

  // public connection: Pool;

  // constructor(connection: Pool) {
  //   this.connection = connection;
  // }

  public async getAllOrders(): Promise<IOrder[]> {
    const query = `SELECT O.id, O.user_id as userId, JSON_ARRAYAGG(P.id) as productsIds
     FROM Trybesmith.orders O
     INNER JOIN
        Trybesmith.products P
     ON O.id = P.order_id
     GROUP BY O.id;`;
    const [allOrders] = await this.connection.execute(
      query,
    );
    return allOrders as IOrder[];
  }

  public async updateProduct(insertId: number, idProduct: number): Promise<void> {
    await this.connection.execute(
      `UPDATE Trybesmith.products
      SET order_id = ?
      WHERE id = ?;`,
      [insertId, idProduct],
    );
  }

  public async createOrder(userId: number, productsIds: number[]): Promise<INewOrder> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.orders(user_id) VALUES(?);',
      [userId],
    );

    await Promise.all(productsIds.map(async (product) => {
      const result = await this.updateProduct(insertId, product);
      return result;
    }));

    return { userId, productsIds };    
  }
}