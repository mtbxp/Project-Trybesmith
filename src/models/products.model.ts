import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { Tproducts } from './interfaces';
import connection from './connection';

const insertNewProduct = async (newProduct: Tproducts): Promise<number> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [newProduct.name, newProduct.amount],
  );
  return insertId;
};

const selectAllProducts = async (): Promise<Tproducts[]> => {
  const [result] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM  Trybesmith.products',
  );
  return result as Tproducts[];
};

export default {
  insertNewProduct,
  selectAllProducts,
};
