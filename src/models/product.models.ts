import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import Product from '../interfaces/product.interface';

async function postProduct({ name, amount }: Product): Promise<Product> {
  const result = await connection.execute<ResultSetHeader & Product>(
    'INSERT INTO Trybesmith.products(name,amount) VALUES(?,?)',
    [name, amount],
  );
  // console.log(result);
  const [dataInserted] = result;
  const { insertId } = dataInserted;
  return { id: insertId, name, amount };
}

export default {
  // getProductById,
  // getAllProducts,
  postProduct,
  // updateProduct,
};