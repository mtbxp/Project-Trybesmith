import { ProductReq } from '../interfaces/productsReq.interfaces';

import connection from './connection';

export default async function postProducts(product: ProductReq): Promise<any> {
  const SQL = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)';
  const values = [product];
  const [data] = await connection.execute(SQL, values);
  console.log(data);
  return data;
}