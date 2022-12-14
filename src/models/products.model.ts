import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { NewProduct, TProduct } from '../types/types';
import connection from './connection';

const getAll = async (): Promise<TProduct[]> => {
  const [products] = await connection
    .execute<RowDataPacket[] & TProduct[]>('SELECT * FROM Trybesmith.products;');
  return products;
};

const create = async (product: NewProduct): Promise<TProduct> => {
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)';
  const [response] = await connection
    .execute<ResultSetHeader>(query, [product.name, product.amount]);
  const productCreated = { id: response.insertId, ...product }; 
  return productCreated;
};

export default {
  getAll,
  create,
};