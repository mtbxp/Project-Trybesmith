import { ResultSetHeader } from 'mysql2';
import { IProduct, Product } from '../interfaces/index';
import connection from './connection';

const create = async (product: IProduct): Promise<Product> => {
  const { name, amount } = product;
  const query = `INSERT INTO Trybesmith.products (name, amount)
        VALUES (?, ?)`;
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader & Product>(query, values);
  const { insertId: id } = result;

  const newProduct: Product = { ...product, id }; 
  return newProduct;
};

export default {
  create,
};
