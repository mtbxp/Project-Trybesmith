import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { Products, Prods } from '../types/products.types';
import connection from './connection';

// RowDataPacket => SELECT
// ResultSetHeaders => POST, DELETE, UPDATE
// OKPacket => SET

const create = async (prod: Prods): Promise<Prods> => {
  const { name, amount } = prod;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount)  VALUE(?,?)',
    [name, amount],
  );
  const result = { id: insertId, ...prod };
  return result as Prods;
};

const getAll = async (): Promise<Products[]> => {
  const [rows] = await connection.execute<RowDataPacket[] & Products[]>('SELECT * FROM Trybesmith.products');
  return rows as Products[];
};

export default {
  create,
  getAll,
};
