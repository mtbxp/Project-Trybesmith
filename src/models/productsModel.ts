import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Product } from '../interfaces';
import connection from './connection';

export default class ProductsModel {
  create = async ({ name, amount }: Product) => {
    const [{ insertId }] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return insertId;
  };

  getAll = async (): Promise<Product[]> => {
    const [products] = await connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.products',
    );
  
    return products as Product[];
  };
}
