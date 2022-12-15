import { ResultSetHeader } from 'mysql2';
import { TAddProduct, TProducts } from '../types/productsType';
import connection from './connection';

export async function insertProduct(name: string, amount: string): Promise<TAddProduct> {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  /* console.log(result); */
  const { insertId } = result;
  return { id: insertId, name, amount };
}

export async function getAll(): Promise<TProducts[]> {
  const [result] = await connection.execute('SELECT * FROM Trybesmith.products');
  return result as TProducts[];
}
