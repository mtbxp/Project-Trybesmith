import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import IProduct from '../interfaces/product.interface';

export async function createProduct({ name, amount }: IProduct): Promise<object> {
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?) ';

  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  const resulto = result.insertId;
  return { id: resulto, name, amount };
}

export async function getAllProd(): Promise<IProduct[]> {
  const query = 'SELECT * FROM Trybesmith.products';

  const [products] = await connection.execute(query);
  return products as IProduct[];
}