import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Product } from '../types';
import connection from './connection';

export default {
  findByPk: async (id: number | undefined) => {
    const [[product]] = await connection.execute<RowDataPacket[]>(`
    SELECT * FROM Trybesmith.products WHERE id = ?`, [id]);
    console.log(product);

    return product;
  },
  create: async (product: Product) => {
    if (product) {
      const [rows] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.products (name, amount) VALUES(?, ?)
    `, [product.name, product.amount]);

      return rows;
    }
  },
};