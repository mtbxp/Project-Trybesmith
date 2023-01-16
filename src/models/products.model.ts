import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { Product } from '../interfaces';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (product: Product): Promise<Product> => {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(query, [name, amount]);
    return { id: insertId, ...product };
  };

  public getAll = async (): Promise<Product[]> => {
    const result = await this.connection
      .execute<(Product & RowDataPacket)[]>('SELECT * FROM Trybesmith.products');
    const [rows] = result;
    return rows;
  };
} 