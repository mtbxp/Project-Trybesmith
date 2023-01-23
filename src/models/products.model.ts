import { ResultSetHeader } from 'mysql2/promise';
import Product from '../types/Product';
import connection from './connection';

// RowDataPackt => SELECT
// ResultSetHeader => INSERT, DELETE, UPDATE

const registerProduct = async ({ name, amount }: Product) => {
  const [result] = await connection.execute<ResultSetHeader>(`
  INSERT INTO Trybesmith.products (name, amount) VALUE(?, ?)`, [name, amount]);

  return {
    id: result.insertId,
    name,
    amount,
  };
};

export default {
  registerProduct,
};