import { RowDataPacket, ResultSetHeader } from 'mysql2';
import connection from './connection';
import { TProduct, NewProduct } from '../types/types';

const productCadastro = async (product: NewProduct): Promise<TProduct> => {
  const banco = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)';
  const [response] = await connection
    .execute<ResultSetHeader>(banco, [product.name, product.amount]);
  const criandoTodosProdutos = { id: response.insertId, ...product }; 
  return criandoTodosProdutos;
};
const getAll = async (): Promise<TProduct[]> => {
  const [products] = await connection
    .execute<RowDataPacket[] & TProduct[]>('SELECT * FROM Trybesmith.products;');
  return products;
};

export default {
  getAll,
  productCadastro,
};