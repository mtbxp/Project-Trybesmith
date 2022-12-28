// import { RowDataPacket } from 'mysql2/promise';
import { Iproducts } from '../interfaces';
import connection from './connection';

async function getAll(): Promise<Iproducts[]> {
  const [products] = await connection.execute(
    'SELECT * FROM Trybesmith.products',
  );
  return products as Iproducts[];
}

async function createProducts(name: string, amount: string): Promise<Iproducts[]> {
  const [newProduct] = await connection.execute(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?);',
    [name, amount],
  );

  return newProduct as Iproducts[];
}

// const getAll = async (): Promise<Tproducts[]> => {
//   const [products] = await connection.execute(
//     'SELECT * FROM Trybesmith.products',
//   );
//   return products as Tproducts[];
// };

export {
  getAll,
  createProducts,
};