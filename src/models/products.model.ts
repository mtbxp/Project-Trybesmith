import connection from './connection';
import IProducts from '../interfaces/products.interface';

const getAllProducts = async (): Promise<IProducts[]> => {
  const [result] = await connection.execute('SELECT * FROM Trybesmith.products');
  return result as IProducts[];
};

export default {
  getAllProducts,
};