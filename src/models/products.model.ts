// import { ResultSetHeader, RowDataPacket } from 'mysql2';
import Product from '../types/Product';
import connection from './connection';

const getAllProducts = async (): Promise<Product[]> => {
  const [result] = await connection.execute('SELECT * FROM Trybesmith.products');
  console.log(result);
  return result as Product[];
};

export default {
  getAllProducts,
};
