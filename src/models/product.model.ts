import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllProducts(): Promise<Product[]> {
    const query = 'SELECT * FROM Trybesmith.products';

    const result = await this.connection.execute(query);
    const [rows] = result;
    return rows as Product[];
  }

  public async createProduct(product: Product): Promise<Product> {
    const { name, amount } = product;

    const query = `INSERT INTO Trybesmith.products (name, amount)
      VALUES (?, ?)`;
    const values = [name, amount];

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, values);
    
    return { id: insertId, name, amount };
  }
}
