import { ResultSetHeader } from 'mysql2';
import { Tproducts } from '../types/types';
import connection from './connection';

const getAll = async (): Promise<Tproducts[]> => {
  const [products] = await connection.execute(
    'SELECT * FROM Trybesmith.products',
  );
  return products as Tproducts[];
};

const createProduct = async (products: Tproducts): Promise<Tproducts> => {
  const { name, amount } = products;

  const query = `INSERT INTO Trybesmith.products (name, amount) 
  VALUES (?, ?)`;
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct: Tproducts = { id, ...products };
  return newProduct;
};

export default {
  createProduct,
  getAll,
};