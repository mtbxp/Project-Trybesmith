import { ResultSetHeader } from 'mysql2/promise';
import { ProductReq } from '../interfaces/productsReq.interfaces';
import connection from './connection';

export async function postProducts(product: ProductReq): Promise<number> {
  const SQL = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)';
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(SQL, [product.name, product.amount]);
  console.log(insertId);
  return insertId;
}

export async function getProducts(): Promise<ResultSetHeader> {
  const SQL = 'SELECT * FROM Trybesmith.products ORDER BY id';
  const [response] = await connection.execute<ResultSetHeader>(SQL);
  console.log(response);
  return response;
}
