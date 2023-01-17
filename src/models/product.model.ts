import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/product.interface';

class ProductModel {
  public pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  public async getAll(): Promise<Product[]> {
    const [products] = await this.pool.execute('SELECT * from Trybesmith.products');

    return products as Product[];
  }

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;

    const [{ insertId }] = await this.pool.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    return { id: insertId, name, amount };
  }

  public async update(productsIds: number[], id: number) {
    await Promise.all(productsIds.map(async (productsId) => {
      await this.pool.execute<ResultSetHeader>(
        'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?', 
        [id, productsId],
      );
    }));
  }
}

export default ProductModel;
