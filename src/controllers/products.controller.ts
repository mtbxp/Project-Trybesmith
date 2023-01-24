import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import ProductsService from '../services/products.service';

class ProductController {
  constructor(private productsService = new ProductsService()) { }
  
  public create = async (request: Request, response: Response) => {
    try {
      const products = request.body;
      const createProducts = await this.productsService.create(products);
      response.status(statusCodes.CREATED).json(createProducts);
    } catch (error) {
      console.log(error);
      return response.status(statusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
  };

  public getAll = async (_request: Request, response: Response) => {
    try {
      const productsAll = await this.productsService.getAll();
      response.status(statusCodes.OK).json(productsAll);
    } catch (error) {
      console.log(error);
      return response.status(statusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
  };
}

export default ProductController;
