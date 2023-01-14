import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IProduct } from '../interfaces';
import connection from './connection';

const registerProduct = async (product: IProduct): Promise<IProduct> => {
  const { name, amount } = product;
  const [result] = await connection.execute<ResultSetHeader & IProduct[]>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?);',
    [name, amount],
  );
  
  const resultWithId = {
    id: result.insertId,
    name,
    amount,
  };

  return resultWithId;
};

const getAllProducts = async (): Promise<IProduct[]> => {
  const [products] = await connection
    .execute<RowDataPacket[] & IProduct[]>('SELECT * FROM Trybesmith.products;');

  return products;
};

export default {
  registerProduct,
  getAllProducts,
};
