import { IProduct } from '../interfaces';
import connection from './connection';

export default async function listAllProductsModel(): Promise<IProduct[]> {
  const query = 'SELECT * FROM Trybesmith.products';
  const [products] = await connection.execute(query);
  return products as IProduct[];
}
