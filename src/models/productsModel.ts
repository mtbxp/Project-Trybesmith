import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { TProduct } from '../types';
import connection from './connection';

export const insert = async (post: TProduct): Promise<TProduct> => {
  const { name, amount } = post;
  const [result] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  const { insertId: id } = result;
  return { id, name, amount };
};

export const getAll = async (): Promise<TProduct[]> => {
  const [posts] = await connection
    .execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.products',
  );
  return posts as TProduct[];
};