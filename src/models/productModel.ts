import { ResultSetHeader } from 'mysql2';
import { IProduct, ProductDetail } from '../interfaces';
import connection from './connection';

export async function create(product: ProductDetail): Promise<IProduct> {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?);';
  const values = [name, amount];
  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;
  const newProduct: IProduct = { id, name, amount };
  return newProduct;
}

export async function listAllProductsModel(): Promise<IProduct[]> {
  const query = 'SELECT * FROM Trybesmith.products;';
  const [products] = await connection.execute(query);
  return products as IProduct[];
}
