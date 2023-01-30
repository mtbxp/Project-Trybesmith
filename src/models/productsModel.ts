import { Pool, ResultSetHeader } from 'mysql2/promise';

import { Product, IdProduct, AllProducts } from '../interfaces';

export default class ProductModel {
  public connection : Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async productCreated(product: IdProduct): Promise<Product> {
    const { name, amount } = product;

    const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES(?, ?)';
    const values = [name, amount];

    const [result] = await this.connection.execute<ResultSetHeader>(query, values);
    const { insertId: id } = result;

    const productNew: Product = { id, name, amount };

    return productNew;
  }

  public async productsGetAll(): Promise<AllProducts[]> {
    const query = 'SELECT * FROM Trybesmith.products';

    const [result] = await this.connection.execute(query);

    return result as AllProducts[];
  }
}
