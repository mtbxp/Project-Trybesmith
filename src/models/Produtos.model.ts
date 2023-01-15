import connection from './connection';
import { ResultSetHeader } from 'mysql2';
import { Produtos } from '../interfaces/IProdutos';

export const insert = async (Produtos: Produtos): Promise<Number> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`INSERT INTO Trybesmith.products (name, amount)
  VALUES (?, ?);`, [Produtos.name, Produtos.amount ]);

  return insertId
 }