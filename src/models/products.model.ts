import { RowDataPacket, ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProduct } from '../interfaces/products';

export async function createNewProduct(products: IProduct) :Promise<IProduct> {
  const { name, amount } = products;
  const query = 'INSERT INTO Trybesmith.products (name,amount) VALUES(?,?)';
  const product = await connection.execute< ResultSetHeader & IProduct>(
    query, 
    [name, amount],
  );
  const [dataInserted] = product;
  const { insertId } = dataInserted;
  return { id: insertId, ...products };
}

export async function getAll() :Promise<IProduct[]> {
  const [products] = await connection.execute < RowDataPacket[] 
  & IProduct[]>('SELECT * FROM Trybesmith.products;');
  return products as IProduct[];
}