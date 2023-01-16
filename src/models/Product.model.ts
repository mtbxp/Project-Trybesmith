import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Product, ProductReturned } from '../utils/types/Product.types';

export default class ProductModel {
  constructor(private connection: Pool) {
    this.connection = connection;
  }
  
  public async create(data: Product): Promise<Product> {
    const sql = `
      INSERT INTO Trybesmith.products (name, amount)
      VALUES (?, ?);
    `;
  
    const [{ insertId }] = await this.connection.query<ResultSetHeader>(sql, [
      data.name,
      data.amount,
    ]);
  
    return { id: +insertId, ...data };
  }
  
  public async getAll(): Promise<ProductReturned[]> {
    const sql = `
      SELECT *
      FROM Trybesmith.products;
    `;
  
    const resultt = await this.connection.query(sql);
    const [rows] = resultt;
    return rows as ProductReturned[];
  }
}