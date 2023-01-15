import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/product.interface';

class ProductModel {
  public pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;

    const [{ insertId }] = await this.pool.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    return { id: insertId, name, amount };
  }
}

export default ProductModel;
