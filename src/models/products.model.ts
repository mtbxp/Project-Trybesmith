import { ResultSetHeader } from 'mysql2';

import connection from './connection';
import { ProductInput } from '../types';

async function createProduct({ amount, name }: ProductInput): Promise<number> {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?);',
    [name, amount],
  );

  return insertId;
}

export { createProduct };
