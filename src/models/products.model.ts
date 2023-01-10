import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { TProduct } from '../types';
import connection from './connection';

const createProductModel = async (product: TProduct):Promise<TProduct> => {
  const { name, amount } = product;

  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products(name, amount) VALUES(?, ?)',
    [name, amount],
  );
  const productCreated = { id: result.insertId, name, amount };

  return productCreated;
};

const getAllProducts = async ():Promise<TProduct[]> => {
  const [result] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.products',
  );
 
  return result as TProduct[];
};

export default { createProductModel, getAllProducts };