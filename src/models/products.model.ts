import { ResultSetHeader } from 'mysql2';
import { Product, TProduct } from '../types/index';
import connection from './connection';

const create = async (product: TProduct): Promise<Product> => {
  const { name, amount } = product;

  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';

  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);

  const { insertId: id } = result;

  const newProduct: Product = { ...product, id };

  return newProduct;
};

const getAll = async (): Promise<Product[]> => {
  const query = 'SELECT * FROM Trybesmith.products';

  const [products] = await connection.execute(query);

  return products as Product[];
};

export default {
  create,
  getAll,
};