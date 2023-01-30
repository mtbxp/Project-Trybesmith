import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Product, IdProduct } from '../interfaces';

export default class ProductModel {
  public connection : Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async productCreated(product: IdProduct): Promise<Product> {
    const { name, amount } = product;

    const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES(?, ?)';
    const values = [name, amount];

    const [result] = await this.connection.execute<ResultSetHeader>(query, values);
    const { insertId: id } = result;

    const productNew: Product = { id, name, amount };

    return productNew;
  }
}