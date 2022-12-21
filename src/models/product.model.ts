import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces';

export default class ProductModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async addProduct(productData: IProduct):Promise<IProduct> {
    const { name, amount } = productData;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(`
      INSERT INTO Trybesmith.products(name, amount) VALUES (?, ?)
    `, [name, amount]);

    const newProduct = { id: insertId, name, amount };
    return newProduct;
  }
}