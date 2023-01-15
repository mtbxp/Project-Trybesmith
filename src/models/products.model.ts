import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { INewProduct } from '../types/types';

export async function addNew(product:INewProduct) {
  const { name, amount } = product;
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?);',
    [name, amount],
  );
  return { id, name, amount };
}

export async function getAll() {
  const [result] = await connection.execute<RowDataPacket[]>('SELECT * FROM Trybesmith.products');
  return result;
}