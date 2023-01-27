import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { Tproduct } from '../types';
import connection from './connection';

const addProduct = async (product: Tproduct):Promise<Tproduct> => {
  const { name, amount } = product;
  const result = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  const [dataInserted] = result;
  const { insertId } = dataInserted;
  return { id: insertId, ...product };
};

const listProducts = async (): Promise<Tproduct[]> => {
  const [result] = await connection.execute<RowDataPacket[] & Tproduct[]>(
    'SELECT id, name, amount, order_Id FROM Trybesmith.products',
  );
  return result as Tproduct[];
};

export default { listProducts, addProduct };