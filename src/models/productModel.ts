import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { TProduct } from '../types';
import connection from './connection';

const getAll = async (): Promise<TProduct[]> => {
  const [rows] = await connection
    .execute<RowDataPacket[] & TProduct[]>(
    `SELECT id, name, amount,
     order_id FROM Trybesmith.products;`,
  );

  return rows;
};

const create = async (product: TProduct): Promise<TProduct> => {
  const { name, amount } = product;
  
  const query = `INSERT INTO Trybesmith.products (name, amount)
      VALUES (?, ?)`;
  const values = [name, amount];
  
  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;
  
  const newProduct: TProduct = { ...product, id };
  return newProduct;
};

export default { getAll, create };