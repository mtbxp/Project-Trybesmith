import { IProduct } from '../interfaces';
import connection from './connection';

export function cadastro() {
  return 'ok';
}

export async function listAllProductsModel(): Promise<IProduct[]> {
  const query = 'SELECT * FROM Trybesmith.products';
  const [products] = await connection.execute(query);
  return products as IProduct[];
}
