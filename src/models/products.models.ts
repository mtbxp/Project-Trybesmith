import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import InterfaceProduct from '../interfaces';
import connection from './connection';

const addProduct = async (products: InterfaceProduct): Promise<InterfaceProduct> => {
  const { name, amount } = products;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUE (?, ?)',
    [name, amount],
  );
  return { id: insertId, ...products };
};

const getAllProducts = async (): Promise<InterfaceProduct[]> => {
  const [products] = await connection.execute<RowDataPacket[] & InterfaceProduct[]>(
    'SELECT * FROM Trybesmith.products;',
  );
  return products;
};

export default {
  addProduct,
  getAllProducts,

};
