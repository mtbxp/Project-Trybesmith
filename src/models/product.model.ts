import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { TProduct } from '../types';

export async function create(product: TProduct):Promise<ResultSetHeader> {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUE (?, ?)',
    [...Object.values(product)],
  );

  return result;
}

export async function getById(id:number):Promise<TProduct | null> {
  const [[result]] = await connection.execute<RowDataPacket[] &
  TProduct[]>('SELECT * FROM Trybesmith.products WHERE id = ?', [id]);
  return result;
}

export async function getAll():Promise<TProduct[]> {
  const [result] = await connection.execute<RowDataPacket[] &
  TProduct[]>('SELECT * FROM Trybesmith.products');
  return result;
}
