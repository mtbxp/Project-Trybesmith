import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/products.interface';

// funcoes retiradas do couse.
export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createProduct(product: Product): Promise<Product> {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)`, [name, amount]);
    return { id: insertId, ...product };
  }
}
