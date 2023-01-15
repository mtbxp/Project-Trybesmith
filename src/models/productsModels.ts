import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { TProduct } from './allInterfaces/interfaceProduct';
import connection from './connection';

const addProductModel = async (productData: TProduct): Promise<TProduct> => {
  const { name, amount } = productData;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?);',
    [name, amount],
  );
  return { id: result.insertId, ...productData };
};

const getProductModel = async (): Promise<TProduct[]> => {
  const [products] = await connection.execute<RowDataPacket[] & TProduct[]>(
    'SELECT id, name, amount, order_id AS orderId FROM Trybesmith.products;',
  );
  return products;
};

export default { addProductModel, getProductModel };