import { RowDataPacket } from 'mysql2/promise';
import { TProduct } from '../types';
import connection from './connection';

const getAllProducts = async (): Promise<TProduct[]> => {
  const [products] = await connection
    .execute<RowDataPacket[] & TProduct[]>(
    'SELECT * FROM Trybesmith.products',
  );
  return products;
};

// const getProductById = async (id) => {
//   const [result] = await connection.execute(
//     'SELECT * FROM StoreManager.products WHERE id = ?', [id],
//   );
//   return result;
// };

const insertProduct = async ({ name, amount }: TProduct) => { 
  await connection
    .execute('INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)', [name, amount]);
};

// const updateProduct = async (id, { name }) => connection.execute(
//   'UPDATE StoreManager.products SET name = (?) WHERE id = (?)',
//   [name, id],
// );

// const deleteProduct = (id) => connection.execute(
//   'DELETE FROM StoreManager.products WHERE id = (?)', [id],
// );

export default {
  getAllProducts,
  insertProduct,
};
