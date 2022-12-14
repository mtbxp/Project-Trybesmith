import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { IProduct } from '../interfaces/products';

export async function createNewProduct() :Promise<IProduct[]> {
  const [products] = await connection.execute(
    'INSERT name ',
  );
  return products as IProduct[];
}

export async function getAll() :Promise<IProduct[]> {
  const [products] = await connection.execute < RowDataPacket[] 
  & IProduct[]>('SELECT * FROM Trybesmith.products;');
  return products as IProduct[];
}