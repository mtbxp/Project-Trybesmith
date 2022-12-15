import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces/product.interface';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createProducts(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return { id: insertId, ...product };
  }

  public async getProdutcAll(): Promise<IProduct[]> {
    const response = await this.connection.execute('SELECT * FROM Trybesmith.products ');
    const [rows] = response;
    return rows as IProduct[];
  }
}