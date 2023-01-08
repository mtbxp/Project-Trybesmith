import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { NewProduct, Product, ProductRegistered } from '../interfaces/types';

export async function getAllProducts(): Promise<Product[]> {
  const listProduct = 'SELECT * FROM Trybesmith.products;';
  const [list] = await connection.execute<RowDataPacket[]>(listProduct);
  return list as Product[];
}

export async function addNewProduct(product: NewProduct): Promise<ProductRegistered> {
  const { name, amount } = product;
  const addProduct = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?);';
  const array = [name, amount];
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(addProduct, array);
  return { id, name, amount };
}