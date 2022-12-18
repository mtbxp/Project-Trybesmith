import { Request, Response } from 'express';
import ProductService from '../services/product.service';
import statusCodes from '../utils/statusCodes';

export default class ProductController {
  constructor(private productService = new ProductService()) { }

  public createProduct = async (req: Request, res: Response) => {
    try {
      const input = req.body;
      const newProduct = await this.productService.createProdutc(input);
      return res.status(statusCodes.CREATED).json(newProduct);
    } catch (e) {
      const erro = (e as Error).message;
      return res.status(statusCodes.INTERNAL_ERROR).json({
        message: 'Não foi possivel cadastrar o produto',
        erro,
      });
    }
  };

  public getAllProducts = async (req: Request, res: Response) => {
    try {
      const allProducts = await this.productService.getAllProducts();
      return res.status(statusCodes.OK).json(allProducts);
    } catch (e) {
      const erro = (e as Error).message;
      return res.status(statusCodes.INTERNAL_ERROR).json({
        message: 'Não foi possivel buscar todos os produtos',
        erro,
      });
    }
  };
}