import { Response, Request } from 'express';
import { Produtos } from '../interfaces/IProdutos';
import { inserirProdutos, buscarProdutos } from '../services/produtos.services';

export const ProdutosInsert = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { body } = req;
    const result: Produtos = await inserirProdutos(body);
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export const ProdutosGet = async (req: Request, res: Response) => {
  try {
    const result = await buscarProdutos();
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};