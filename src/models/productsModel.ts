import connection from './connection';
import IProducts from '../interfaces/IProduct';

const getAllProducts = async (): Promise<IProducts[]> => {
  const query = 'SELECT * FROM Trybesmith.products;';
  const [result] = await connection.execute(query);
  return result as IProducts[];
};

export default {
  getAllProducts,
};