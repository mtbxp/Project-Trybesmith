import { ResultSetHeader } from 'mysql2';
import Product from '../types/Product';
import connection from './connection';

const registerProduct = async ({ name, amount }: Product) => {
  console.log('chegou na model');
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUE (?, ?)',
    [name, amount],
  );

  return {
    id: result.insertId,
    name,
    amount,
  };
};

const testeBanco = async () => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUE (?, ?)',
    ['teste', '100'],
  );

  return {
    id: result.insertId,
    name: 'teste',
    amount: '100',
  };
};

export default {
  registerProduct,
  testeBanco,
};