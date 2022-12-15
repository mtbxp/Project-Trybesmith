import { ResultSetHeader } from 'mysql2';
import { TAddProduct } from '../types/productsType';
import connection from './connection';

export default async function insertProduct(name: string, amount: string): Promise<TAddProduct> {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  /* console.log(result); */
  const { insertId } = result;
  return { id: insertId, name, amount };
}
