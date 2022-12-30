import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Product, ProductParameters } from '../interfaces/product.interface';

const createProductModel = async (product: ProductParameters): Promise<Product> => {
  const { name, amount } = product;

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
