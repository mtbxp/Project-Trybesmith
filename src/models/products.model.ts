import connection from './connection';
import { TProduct } from '../types';

// const insertProduct = async ({ name, amount }: TProduct) => {
//   const [result] = await connection
//     .execute('INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)', [name, amount]);

//   const { insertId } = result;
//   return { id: insertId, name, amount };
// };

async function getAllProducts(): Promise<TProduct[]> {
  const query = 'SELECT * FROM Trybesmith.products';
  const [products] = await connection.execute(query);

  return products as TProduct[];
}

export default {
  getAllProducts,
};