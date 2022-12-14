import { ResultSetHeader } from 'mysql2';
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
}