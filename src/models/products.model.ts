import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces/products.interface';

export default class ProductModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public insert = async (product: IProduct): Promise<IProduct> => {
    const { amount, name } = product;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    const { insertId } = result;
    return { id: insertId, ...product };
  };

  public getAll = async (): Promise<IProduct[]> => {
    const [result] = await this.connection.execute(
      'SELECT * FROM Trybesmith.products',
    );

    return result as IProduct[];
  };
}
