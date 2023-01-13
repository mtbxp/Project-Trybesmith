import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connect from './connection';
import { ProductInterface } from '../interfaces/product.interface';

export default class ProductModel {
  private connection = connect;

  async create(product: ProductInterface): Promise<ProductInterface> {
    const { name, amount } = product;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    return { id: insertId, ...product };
  }

  async getProducts(): Promise<ProductInterface[]> {
    const [products] = await this.connection.execute<RowDataPacket[] & ProductInterface[]>(
      'SELECT * FROM Trybesmith.products',
    );

    return products;
  }
}
