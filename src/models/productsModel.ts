import { ResultSetHeader } from 'mysql2';
import connect from './connection';
import { ProductInferface } from '../interfaces/products.ifc';

export default class Product {
  private connection = connect;

  async create(product: ProductInferface): Promise<ProductInferface> {
    const { name, amount } = product;
 
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    return { id: insertId, ...product };
  }
}
