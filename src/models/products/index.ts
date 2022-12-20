import { ResultSetHeader } from 'mysql2';
import connection from '../connection';

const insertProduct = async (name: string, amount: string): Promise<number> => {
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES( ?, ?)',
    [name, amount],
  );
  return insertId;
};

export default insertProduct;