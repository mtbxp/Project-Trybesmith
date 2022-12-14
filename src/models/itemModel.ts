import { Pool, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import Item from '../interfaces/itemInterface';

export default class ItemModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<Item[]> {
    const result = await this.connection.execute('SELECT * FROM Trybesmith.products');
    const [rows] = result;
    return rows as Item[];
  }

  public async create(item: Item): Promise<Item> {
    const { name, amount } = item;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    return { id: insertId, ...item };
  }
}
