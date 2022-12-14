import connection from './connection';
import IProducts from '../interfaces/IProducts';

const getAllProducts = async (): Promise<IProducts[]> => {
  const query = 'SELECT * FROM products;';
  const [result] = await connection.execute(query);
  return result as IProducts[];
};

export default {
  getAllProducts,
};