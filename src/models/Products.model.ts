import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProdutos } from '../interfaces/IProdutos';

export const insert = async (Produto: IProdutos): Promise<number> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.products
    (name, amount)
    VALUES (?, ?);`,
    [Produto.name, Produto.amount],
  );

  return insertId;
};

export const getAll = async (): Promise<IProdutos[]> => {
  const [Result] = await connection.execute('select * from Trybesmith.products');
  return Result as IProdutos[];
};

export const getById = async (id: number): Promise<IProdutos[]> => {
  const [Result] = await connection.execute('select * from Trybesmith.products where id = ?', [id]);
  return Result as IProdutos[];
};