import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { INewProduct } from '../types/types';

export default async function addNew(product:INewProduct) {
  const { name, amount } = product;
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?);',
    [name, amount],
  );
  return { id, name, amount };
}