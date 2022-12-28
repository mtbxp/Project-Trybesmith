// import { RowDataPacket } from 'mysql2/promise';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { InewProducts, Iproducts } from '../interfaces';
import connection from './connection';

export async function getAll(): Promise<Iproducts[]> {
  const [products] = await connection.execute(
    'SELECT * FROM Trybesmith.products',
  );
  return products as Iproducts[];
}

export async function createProducts(name: string, amount: string): Promise<InewProducts> {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?);',
    [name, amount],
  );

  return { id: insertId, name, amount };
}

export async function getById(id: number): Promise<Iproducts | undefined> {
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

// export {
//   getAll,
//   createProducts,
//   getById,
// };