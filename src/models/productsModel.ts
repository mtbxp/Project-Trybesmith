import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProducts, NewProduct } from '../interfaces/Product';

const addProduct = async (product: NewProduct): Promise<IProducts> => {
  const q = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)';
  const [response] = await connection.execute<ResultSetHeader>(q, [product.name, product.amount]);
  const result = { id: response.insertId, ...product };
  return result;
};

const getAllProducts = async (): Promise<IProducts[]> => {
  const query = 'SELECT * FROM Trybesmith.products;';
  const [result] = await connection.execute(query);
  return result as IProducts[];
};

export default {
  addProduct,
  getAllProducts,
};