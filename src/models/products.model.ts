import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Product, ProductRequest } from '../interfaces/products.interface';
import connection from './connection';

export const registerProductModel = async ({ name, amount }: ProductRequest): Promise<number> => {
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const [result] = await connection.execute<ResultSetHeader>(
    query,
    [name, amount],
  );
  return result.insertId;
};

export const getAllProductsModel = async (): Promise<Product[]> => {
  const query = 'SELECT * FROM Trybesmith.products';
  const [result] = await connection.execute<RowDataPacket[] & Product[]>(query);
  return result;
};
