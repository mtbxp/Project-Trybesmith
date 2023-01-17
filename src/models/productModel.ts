import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { Product } from '../utils/interfaces/productInterface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<Product[]> => {
    const [result] = await this.connection
      .execute('SELECT * FROM Trybesmith.products') as RowDataPacket[];

    return result as Product[];
  };

  public create = async (product: Product): Promise<Product> => {
    const { name, amount } = product;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    return { id: insertId, ...product };
  };
}
