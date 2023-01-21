import { Pool, ResultSetHeader } from 'mysql2/promise';
import Products from '../interfaces/products.interface';
import connection from './connection';

class ProductsModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async create(products: Products): Promise<Products> {
    const { name, amount } = products;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products(name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [{ insertId }] = result;
    return { id: insertId, ...products };
  }
}

export default ProductsModel;
