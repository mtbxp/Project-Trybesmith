import { ResultSetHeader } from 'mysql2';
import { User } from '../interfaces';
import connection from './connection';

export default class UserModel {
  create = async ({ username, vocation, level, password }: User) => {
    const [{ insertId }] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );

    return insertId;
  };

  // getAll = async (): Promise<Product[]> => {
  //   const [products] = await connection.execute<RowDataPacket[]>(
  //     'SELECT * FROM Trybesmith.products',
  //   );
  
  //   return products as Product[];
  // };
}