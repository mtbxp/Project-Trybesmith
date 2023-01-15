import { ResultSetHeader } from 'mysql2/promise';
import { Product } from '../interfaces/product.interface';
import connection from './connection';

const createProduct = async (product:Product):Promise<Product> => {
  const { name, amount } = product;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)',
    [name, amount],
  );
  const addedProduct = { id: insertId, ...product };
  console.log(addedProduct);
  return addedProduct;
};
const getAll = async ():Promise<Product[]> => {
  const [result] = await connection.execute('SELECT * FROM Trybesmith.products');
  return result as Product[];
};

export default {
  createProduct,
  getAll,
};