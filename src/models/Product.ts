import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Product } from '../types';

export default class ProductModel {
  public connection;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async post({ name, amount }: Product): Promise<Product> {
    const query = `
    INSERT INTO Trybesmith.products (name, amount)
    VALUES (?, ?)`;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    return { id: insertId, name, amount };
  }

  public async listAll(): Promise<Product[]> {
    const query = `
    SELECT * FROM Trybesmith.products`;
    const [products] = await this.connection.execute(query);
    return products as Product[];
  }
}