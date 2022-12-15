// import { RowDataPacket } from 'mysql2/promise';
import { ResultSetHeader } from 'mysql2';
import { Tproduct } from '../types';
import connection from './connection';

export async function getAll(): Promise<Tproduct[]> {
  const [products] = await connection.execute('SELECT * FROM Trybesmith.products');
  return products as Tproduct[];
}

export async function insertProducts(product: Tproduct): Promise<Tproduct[]> {
  const { name, amount } = product;
  await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  return getAll();
}  
