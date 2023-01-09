import { ResultSetHeader } from 'mysql2';
import { Pool } from 'mysql2/promise';
import connection from './conection';
import { ProductInterface } from '../interfaces/products';

class Product {
  private connection: Pool;

  name?: string;

  amount?: string;

  constructor(name: string, amount: string) {
    this.name = name;
    this.amount = amount;
    this.connection = connection;
  }

  async saveProduct(): Promise<number> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [this.name, this.amount],
    );
    return insertId as number;
  }

  public async getAll(): Promise<ProductInterface[]> {
    const [products] = await this.connection.execute('SELECT * FROM Trybesmith.products');
    return products as ProductInterface[];
  }
}

export default Product;