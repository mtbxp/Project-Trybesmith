import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Product } from '../interfaces/product.interface';

export const create = async (product: Product): Promise<Product> => {
  const { name, amount } = product;
  const query = `INSERT INTO Trybesmith.products (name, amount)
  VALUES(?,?)`;
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct: Product = { ...product, id };
  return newProduct;
};

export const getAll = async (): Promise<Product[]> => {
  const query = 'SELECT * FROM Trybesmith.products';
  const [products] = await connection.execute(query);
  return products as Product[];
};
