import { ResultSetHeader, RowDataPacket } from 'mysql2';
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
  
  async getAllProducts(): Promise<ProductInferface[]> {
    const [allProducts] = await this.connection.execute<RowDataPacket[] & ProductInferface[]>(
      'SELECT * FROM Trybesmith.products',
    );
    return allProducts;
  }
}
