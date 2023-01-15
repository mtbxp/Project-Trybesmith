import { Response, Request } from "express";
import { Produtos } from "../interfaces/IProdutos";
import { inserirProdutos } from "../services/produtos.services";

export const ProdutosInsert = async (req: Request, res: Response) => {
  try {
    const body: Produtos = req.body;
    const result = await inserirProdutos(body);
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};