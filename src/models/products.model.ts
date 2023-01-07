import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/product.interface';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<IProduct[]> => {
    const [row] = await this.connection.execute<IProduct[] & ResultSetHeader>(
      'SELECT * FROM Trybesmith.products',
    );

    return row;
  };
}