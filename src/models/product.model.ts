// ./src/models/product.model.ts

import { ResultSetHeader, RowDataPacket } from 'mysql2';
import mysql from './connection';

import ProductInterface from '../interfaces/ProductInterface';

export default class ProductModel {
  private connection = mysql;

  async create(product: ProductInterface): Promise<ProductInterface> {
    const { name, amount } = product;

    const result = await this.connection.execute<ResultSetHeader>( 
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)', 
      [name, amount],
    );

    const [productInserted] = result;

    const { insertId } = productInserted;

    return { id: insertId, ...product };
  }

  async getProducts(): Promise<ProductInterface[]> {
    const [rows] = await this.connection.execute<ProductInterface[] & RowDataPacket[]>(
      'SELECT id, name, amount, order_Id FROM Trybesmith.products',
    );

    return rows;
  }
}
