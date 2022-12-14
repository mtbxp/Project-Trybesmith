import { ResultSetHeader, RowDataPacket } from 'mysql2';
import mysql from './connection';
import { IProduct } from '../interfaces/IProduct';

export default class ProductModel {
  private connection = mysql;

  async create(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;

    const result = await this.connection.execute<ResultSetHeader>( 
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)', 
      [name, amount],
    );

    const [productInserted] = result;
    
    const { insertId } = productInserted;

    return { id: insertId, ...product };
  }

  async getAllProducts(): Promise<IProduct[]> {
    const [rows] = await this.connection.execute<IProduct[] & RowDataPacket[]>(
      'SELECT id, name, amount, order_Id FROM Trybesmith.products',
    );

    return rows;
  }
}