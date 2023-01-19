import { ResultSetHeader, RowDataPacket } from 'mysql2';
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

const getAll = async (): Promise<Product[]> => {
  const query = 'SELECT * FROM Trybesmith.products';
  const [rows] = await connection.execute<RowDataPacket[] & Product[]>(query);
  return rows;
};

export default {
  create, 
  getAll,
};
