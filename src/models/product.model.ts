import IProduct from '../interfaces/IProduct';
import mysql from './connection';

export default class ProductModel {
  private connection = mysql;

  async getProductAll(): Promise<IProduct[]> {
    const [rows] = await this.connection.execute(
      'SELECT * FROM Trybesmith.products',
    );

    return rows as IProduct[];
  }
}
