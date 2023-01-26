import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import Order from '../interfaces/order.Interface';
import connection from './connection';
import { TCurrentUser } from '../types/types';

export default class OrderModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const [rows] = await this.connection.execute<Order[] & RowDataPacket[]>(
      `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) as productsIds
      FROM Trybesmith.orders AS o INNER JOIN Trybesmith.products AS p
      WHERE o.id = p.order_id GROUP BY o.id`,
    );
    return rows;
  }

  public updateProduct = async (productId: number, idOrder: number): Promise<number> => {
    const query = 'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?';
    const values = [idOrder, productId];
    await connection.execute<ResultSetHeader>(query, values);
    return productId;
  };
  
  public createOrder = async (body: TCurrentUser) => {
    const { productsIds, currentUser } = body;
    const query = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?)';
    const values = [currentUser.data.id];
    const [order] = await connection.execute<ResultSetHeader>(query, values);
    await Promise.all(productsIds.map(async (productId) => {
      const result = await this.updateProduct(productId, order.insertId);
  
      return result;
    }));
    const result = { userId: currentUser.data.id, productsIds };
  
    return result;
  };
}