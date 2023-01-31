import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Products, NewProduct } from '../interfaces/product';

const newProduct = async (product: NewProduct): Promise<Products> => {
  const q = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)';
  const [response] = await connection.execute<ResultSetHeader>(
    q,
    [product.name, product.amount],
  );
  const result = { id: response.insertId, ...product };
  return result;
};

const getAllProducts = async (): Promise<Products[]> => {
  const q = 'SELECT * FROM Trybesmith.products;';
  const [result] = await connection.execute(q);
  return result as Products[];
};

export default {
  newProduct,
  getAllProducts,
};