// import { RowDataPacket } from 'mysql2/promise';
import { Tproducts } from '../types';
import connection from './connection';

// const createProducts = async (name, amount) => {
//   const [newProduct] = await connection.execute(
//     'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?);',
//     [name, amount],
//   );

//   return newProduct;
// };

const getAll = async (): Promise<Tproducts[]> => {
  const [products] = await connection.execute(
    'SELECT * FROM Trybesmith.products',
  );
  return products as Tproducts[];
};

export default {
  getAll,
};