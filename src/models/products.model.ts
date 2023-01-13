import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import Tproduct from '../interfaces/product.interface';

class ProductModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<Tproduct[]> {
    const [rows] = await this.connection.execute<(Tproduct & RowDataPacket)[]>(
      'SELECT id, name, amount, order_id AS orderId FROM Trybesmith.products');
    return rows;
  } 

  public async create(product: Tproduct): Promise<Tproduct> {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return { id: insertId, ...product };
  }
}

export default ProductModel;