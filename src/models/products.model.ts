import { RowDataPacket, ResultSetHeader } from 'mysql2';
import connection from './connection';

import { TProduct } from '../types';

const getAll = async (): Promise<TProduct[]> => {
  const [rows] = await connection.execute<RowDataPacket[] & TProduct[]>(
    'SELECT * FROM Trybesmith.products',
  );
  return rows;
};

const insert = async (product: TProduct): Promise<number> => {
  const [rows] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name) VALUES (?, ?)',
    [product.name, product.amount],
  );
  return rows.insertId as number;
};

export default {
  getAll,
  insert,
};

// const playList =https://www.youtube.com/watch?v=piTvLuHWLyg&list=RDfptYx9YBY3w&index=23