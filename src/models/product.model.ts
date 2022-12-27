import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProducts, NewProduct } from '../interfaces/Product.interface';

const addProduct = async (product: NewProduct): Promise<IProducts> => { 
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)';
  const [response] = await connection
    .execute<ResultSetHeader>(query, [product.name, product.amount]);
  
  const result = { id: response.insertId, ...product };
  return result;
};

const getAll = async (): Promise<IProducts[]> => {
  const [result] = await connection.execute('SELECT * FROM Trybesmith.products;');
  return result as IProducts[];
};

export default {
  addProduct,
  getAll,
};