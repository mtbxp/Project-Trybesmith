import { RowDataPacket } from 'mysql2';
import connection from './connection';
import NewProductInput, { LastProducts } from '../types/products';

export const addProducts = async (payload: NewProductInput) => {
  const { name, amount } = payload;
  const [created] = await connection.execute(`
  INSERT INTO Trybesmith.products (name, amount) 
  VALUES (?, ?);
  `, [name, amount]) as RowDataPacket[];
  return created;
};

export const getLastProduct = async () => {
  const result = await connection.execute(`
  SELECT * FROM Trybesmith.products order by id desc limit 1
  `) as unknown as LastProducts;
  return result;
};

export const AllProducts = async () => {
  const [result] = await connection.execute(`
  SELECT * FROM Trybesmith.products order by id`) as unknown as RowDataPacket[][];
  return result;
};