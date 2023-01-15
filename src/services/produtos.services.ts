import { insert } from "../models/Produtos.model";
import { Produtos } from "../interfaces/IProdutos";

export const inserirProdutos = async (Produto: Produtos): Promise<Produtos> => {

  const produtoInsert = await insert(Produto);

  const result = {
    id: produtoInsert,
    name: Produto.name,
    amount: Produto.amount,
  }

  return result;
};

