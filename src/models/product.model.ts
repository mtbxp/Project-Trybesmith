import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.connection.execute('SELECT * FROM Trybesmith.products');
    const [rows] = products;
    return rows as Product[];
  }

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }

  public async partialUpdate(orderId: number, productId: number): Promise<void> {
    await this.connection.execute<ResultSetHeader>(
      `UPDATE Trybesmith.products 
      SET order_id = ?
      WHERE id = ?`,
      [orderId, productId],
    );
  }
}