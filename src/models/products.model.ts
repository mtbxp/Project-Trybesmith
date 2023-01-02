import { ResultSetHeader } from 'mysql2';
import connection from '../config/db';
import { NewProduct } from '../types';

export default {
  findAll: async () => {
    const [products] = await connection.execute('SELECT * FROM Trybesmith.products');

    return products;
  },

  insert: async ({ name, amount } : NewProduct) => {
    const [{ insertId }] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products(name, amount) VALUES (?, ?)', 
      [name, amount],
    );

    return insertId;
  },
};