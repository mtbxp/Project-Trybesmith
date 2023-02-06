import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/users.interface';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async () => {
    const [query] = await this.connection.execute(
      `SELECT ord.id, ord.user_id AS userId, JSON_ARRAYAGG(prod.id) AS productsIds
        FROM Trybesmith.orders as ord
        INNER JOIN Trybesmith.products as prod ON prod.order_id = ord.id
        GROUP BY ord.id`,
    );
    return query;
  };

  public updateProduct = async (productId: number, id: number) => {
    const query = `UPDATE Trybesmith.products 
    SET order_id = ?
    WHERE id = ?`;
    await this.connection.execute<ResultSetHeader>(query, [id, productId]);
  };
  
  public create = async (user: User, productsIds: number[]) => {
    const query = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?)';
    const [order] = await this.connection.execute<ResultSetHeader>(query, [user.id]);
    // console.log(order);
    const { insertId } = order;
    await Promise.all(productsIds.map(async (productId) => {
      await this.updateProduct(productId, insertId);
    }));    
    return { userId: user.id, productsIds };
  };
}