import { Pool, ResultSetHeader } from 'mysql2/promise';
import Products from '../interfaces/products.interface';
import connection from './connection';

class ProductsModel {
  public connection: Pool;

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

  public async getAll(): Promise<Products[]> {
    const productsAll = await this.connection.execute('SELECT * FROM Trybesmith.products');
    const [rows] = productsAll;
    return rows as Products[];
  }
}

export default ProductsModel;
