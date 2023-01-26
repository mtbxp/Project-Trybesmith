import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interface/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (product: Product): Promise<Product> => {
    const { name, amount } = product;
    
    const query = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [queryResult] = query;
    // console.log(queryResult);
    const { insertId } = queryResult;        
    const object = { id: insertId, ...product };
    // console.log(object);
    return object;
  };
}
