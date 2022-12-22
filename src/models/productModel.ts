import { /* Pool, */ ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { Product } from '../helpers/types';
import connection from './connection';

// export default class ProductsModel {
//   public connection: Pool;

//   constructor(connection: Pool) {
//     this.connection = connection;
//   }

//   public async insertProduct(product: Product): Promise<Product> {
//     const { name, amount } = product;
//     const result = await this.connection.execute<ResultSetHeader>(`
//     INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)
//     `, [name, amount]);

//     const [{ insertId }] = result;

//     return { id: insertId, name, amount };
//   }
// }

async function getAll(): Promise<Product[]> {
  const [result] = await connection.execute<RowDataPacket[] & Product>(
    'SELECT * FROM Trybesmith.products',
  );

  return result as unknown as Product[];
}

async function create(product: Product): Promise<Product> {
  const { name, amount } = product;

  const [{ insertId }] = await connection.execute<ResultSetHeader>(`
  INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)
  `, [name, amount]);

  return { id: insertId, name, amount };
}

export default {
  getAll,
  create,
};