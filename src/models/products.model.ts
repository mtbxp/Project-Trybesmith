import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/products.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Product[]> {
    const result = await this.connection.execute('SELECT * from Trybesmith.products');
    const [rows] = result;

    return rows as Product[];
  }

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;
    
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    return { id: insertId, ...product };
  }
}