import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import Product from '../interface/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<Product[]> => {
    const [queryResult] = await this.connection.execute<(RowDataPacket & Product)[]>(
      'SELECT * FROM Trybesmith.products');
    // console.log(queryResult);
    return queryResult;
  };

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
