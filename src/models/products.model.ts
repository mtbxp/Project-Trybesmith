import { Pool, ResultSetHeader } from 'mysql2/promise';
import Products from '../interfaces/products.interface';

export default class ProductModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  //   public async getAll(): Promise<Product[]> {
  //     const result = await this.connection.execute('SELECT * FROM books');
  //     const [rows] = result;
  //     return rows as Book[];
  //   }
  
  public async createProduct(product: Products): Promise<Products> {
    const { name, amount } = product;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const { insertId } = result;
    return { id: insertId, ...product };
  }
}
