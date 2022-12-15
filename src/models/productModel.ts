import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { Product } from '../interfaces';

const insertProduct = async (name: string, amount: string): Promise<Product> => {
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)';
  const result = await connection.execute<ResultSetHeader>(query, [name, amount]);
  console.log(result);
  
  const [dataInserted] = result;
  const { insertId } = dataInserted;

  return { id: insertId, name, amount };
};

export {
  insertProduct,
};