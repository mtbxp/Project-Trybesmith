// import { RowDataPacket } from 'mysql2/promise';
import { RowDataPacket } from 'mysql2';
import { Iproducts, InewProducts } from '../interfaces';
import connection from './connection';

async function getAll(): Promise<Iproducts[]> {
  const [products] = await connection.execute(
    'SELECT * FROM Trybesmith.products',
  );
  return products as Iproducts[];
}

async function createProducts(name: string, amount: string): Promise<InewProducts[]> {
  const [newProduct] = await connection.execute(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?);',
    [name, amount],
  );

  return newProduct as InewProducts[];
}

async function getById(id: number): Promise<Iproducts | undefined> {
  const [products] = await connection
    .execute<RowDataPacket[] & Iproducts[] >('SELEC * FROM Trybesmith.products WHERE id = ?', [id]);
  return products[0];
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
  getById,
};