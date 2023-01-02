import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from '../config/db';
import { NewProduct, Product } from '../types';

export default {
  findAll: async (): Promise<Product[]> => {
    const [products] = await connection.execute<(Product & RowDataPacket)[]>(
      'SELECT * FROM Trybesmith.products');

    return products;
  },

  insert: async ({ name, amount }: NewProduct): Promise<number> => {
    const [{ insertId }] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products(name, amount) VALUES (?, ?)', 
      [name, amount],
    );

    return insertId;
  },
};