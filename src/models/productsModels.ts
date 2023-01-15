import { ResultSetHeader } from 'mysql2/promise';
import { TProduct } from './interfaceProduct';
import connection from './connection';

const addProductModel = async (productData: TProduct): Promise<TProduct> => {
  const { name, amount } = productData;
  const result = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  const [dataInserted] = result;
  const { insertId } = dataInserted;
  return { id: insertId, ...productData };
};

export default { addProductModel };