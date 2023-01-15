import { insert, getAll } from '../models/Products.model';
import { IProdutos } from '../interfaces/IProdutos';

export const inserirProdutos = async (Produto: IProdutos): Promise<IProdutos> => {
  const produtoInsert = await insert(Produto);

  const result = {
    id: produtoInsert,
    name: Produto.name,
    amount: Produto.amount,
  };

  return result;
};

export const buscarProdutos = async (): Promise<IProdutos[]> => {
  const result = await getAll();
  return result;
};
