import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { Products } from '../interfaces/index';

export async function productsRegistrationModel(product: Products):
Promise<ResultSetHeader> {
  const { name, amount } = product;
  const [products] = await connection
    .execute('INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)', [name, amount]);
  return products as ResultSetHeader;
}

export async function getProductsModel():
Promise<RowDataPacket[]> {
  const [products] = await connection
    .execute('SELECT * FROM Trybesmith.products');
  return products as RowDataPacket[];
}
