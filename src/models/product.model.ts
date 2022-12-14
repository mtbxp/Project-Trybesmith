import { ResultSetHeader } from 'mysql2';
import IProduct from '../interfaces/IProduct';
import mysql from './connection';

export default class ProductModel {
  private connection = mysql;

  async getAllProducts(): Promise<IProduct[]> {
    const [rows] = await this.connection.execute(
      'SELECT * FROM Trybesmith.products',
    );

    return rows as IProduct[];
  }

  async insertProduct(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    return { id: insertId, ...product };
  }
}