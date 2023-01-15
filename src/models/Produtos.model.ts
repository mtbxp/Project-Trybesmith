import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Produtos } from '../interfaces/IProdutos';

export const insert = async (Produto: Produtos): Promise<number> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.products
    (name, amount)
    VALUES (?, ?);`,
    [Produto.name, Produto.amount],
  );

  return insertId;
};

export const getAll = async (): Promise<Produtos[]> => {
  const [Result] = await connection.execute('select * from Trybesmith.products');
  return Result as Produtos[];
};