import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import IProducts, { NewProduct } from '../interfaces/products.interface';

const insertProduct = async (product: IProducts): Promise<NewProduct> => {
  const [resp] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)', 
    [product.name, product.amount],
  );
  const result = { id: resp.insertId, ...product };
  return result;
};

const getAllProducts = async (): Promise<IProducts[]> => {
  const [result] = await connection.execute('SELECT * FROM Trybesmith.products');
  return result as IProducts[];
};

export default {
  insertProduct,
  getAllProducts,
};