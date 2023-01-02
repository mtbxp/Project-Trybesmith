import connection from './connection';
import { TProduct } from '../types';

const insertProduct = async ({ name, amount }: TProduct) => {
  await connection
    .execute('INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)', [name, amount]);
};

export default {
  insertProduct,
};
