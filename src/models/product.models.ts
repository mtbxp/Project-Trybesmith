import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Product, ProductParameters } from '../interfaces/product.interface';

const createProductModel = async ({ name, amount }: ProductParameters): Promise<Product> => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products VALUE (?, ?)',
    [
      name,
      amount,
    ],
  );

  return { id: result.insertId, name, amount };
};

export default createProductModel;
