import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { TProduct } from './interfaces/product';
import connection from './connection';

const add = async (productData: TProduct): Promise<TProduct> => {
  const { name, amount } = productData;
  const [insertedData] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?);',
    [name, amount],
  );
  return { id: insertedData.insertId, ...productData };
};

const getAll = async (): Promise<TProduct[]> => {
  const [products] = await connection.execute<RowDataPacket[] & TProduct[]>(
    'SELECT id, name, amount, order_id AS orderId FROM Trybesmith.products;',
  );
  return products;
};

export default { add, getAll };