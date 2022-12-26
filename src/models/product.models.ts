import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Product, ProductParameters } from '../interfaces/product.interface';

const createProductModel = async ({ name, amount }: ProductParameters): Promise<Product> => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?);',
    [
      name,
      amount,
    ],
  );

  return { id: result.insertId, name, amount };
};

const getAllProductsModel = async (): Promise<Product[]> => {
  const [results] = await connection.execute(
    'SELECT * FROM Trybesmith.products;',
  );
    
  return results as Product[];
};

export default {
  createProductModel,
  getAllProductsModel,
};
