import { Response, Request } from 'express';
import { IProdutos } from '../interfaces/IProdutos';
import { inserirProdutos, buscarProdutos } from '../services/Products.services';

export const ProdutosInsert = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { body } = req;
    const result: IProdutos = await inserirProdutos(body);
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export const ProdutosGet = async (req: Request, res: Response): Promise<Response> => {
  try {
    const result = await buscarProdutos();
    return res.status(200).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};