import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import mysql from './connection';
import IProduct from '../interface/IproductIndex';

export default class ProductModel {
  connection = mysql;

  public async addProducts(name: string, amount: string): Promise<IProduct> {
    const [{ insertId }] = await this
      .connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)',
      [name, amount],
    );

    return { id: insertId, name, amount };
  }

  public async findAll(): Promise<IProduct[]> {
    const [resultFindAll] = await this.connection
      .execute<IProduct[] & RowDataPacket[]>('SELECT * FROM Trybesmith.Products;');
    return resultFindAll;
  }
}