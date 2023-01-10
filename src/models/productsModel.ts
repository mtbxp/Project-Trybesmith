import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { Products } from '../interfaces/index';

export default async function productsRegistrationModel(product: Products):
Promise<ResultSetHeader> {
  const { name, amount } = product;
  const [products] = await connection
    .execute('INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)', [name, amount]);
  return products as ResultSetHeader;
}
