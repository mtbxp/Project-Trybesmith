import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/products.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async () => {
    const [queryResult] = await this.connection.execute<(ResultSetHeader)>(
      'SELECT * FROM Trybesmith.products');
    // console.log(queryResult);
    return queryResult;
  };

  public create = async (product: Product) => {
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
