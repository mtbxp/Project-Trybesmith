import connection from './connection';

interface IProducts {
  id: number;
  name: string;
  amount: string;
  orderId?: number;
}

const getAllProducts = async (): Promise<IProducts[]> => {
  const query = 'SELECT * FROM products;';
  const [result] = await connection.execute(query);
  return result as IProducts[];
};

export default {
  getAllProducts,
};