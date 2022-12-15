import { RowDataPacket } from 'mysql2/promise';

import { TProduct, TUser } from '../types';
import connection from './connection';

// RowDataPacket => SELECT
// ResultSetHeader => INSERT, DELETE, UPDATE
// OkPacket => SET (protocol_41)

const getAlProducts = async (): Promise<TProduct[]> => {
  const [product] = await connection
    .execute<RowDataPacket[] & TProduct[]>('SELECT * FROM Trybesmith.products;');
  return product;
};

const insertProduct = async ({ name, amount }:any) => {
  await connection.execute(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
};

const getAllUser = async (): Promise<TUser[]> => {
  const [users] = await connection
    .execute<RowDataPacket[] & TUser[]>('SELECT * FROM Trybesmith.users;');
  return users;
};

const insertUser = async ({ username, vocation, level, password }:TUser) => {
  await connection.execute(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
};

const getLogin = async ({ username, password }:TUser): Promise<TUser[]> => {
  const [users] = await connection
    .execute<RowDataPacket[] & TUser[]>(
    'SELECT * FROM Trybesmith.users WHERE username = (?) AND password = (?);',
    [username, password],
  );
  return users;
};

export default {
  getAlProducts,
  insertProduct,
  getAllUser,
  insertUser,
  getLogin,
};
