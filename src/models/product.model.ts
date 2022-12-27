import { Pool, ResultSetHeader } from 'mysql2';
import Products from '../interfaces/products.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: Products):Promise<Products> {
    const { name, amount } = product;
    const result = this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)',
      [name, amount],
    );
    console.log('🚀 ~ file: product.model.ts:17 ~ ProductModel ~ create ~ result', result);
    return product;
  }
}
