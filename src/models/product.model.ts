import { RowDataPacket, ResultSetHeader } from 'mysql2';
import connection from './connection';
import { TProduct, NewProduct } from '../types/Types';

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