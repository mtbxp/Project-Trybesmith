import { ResultSetHeader } from 'mysql2';
import connection from '../connection';
import { TProducts } from '../type';

const insertNewProduct = async (newProduct: TProducts):Promise<ResultSetHeader> => {
  const [result] = await connection
    .execute<ResultSetHeader>(`INSERT INTO Trybesmith.products (name, amount) 
  VALUES (?,?)`, [newProduct.name, newProduct.amount]);
  return result;
}; 

export default { insertNewProduct };