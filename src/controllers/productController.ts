import { Request, Response } from 'express';
import statusCode from '../helpers/statusCodes';
import productService from '../services/productService';

// export default class ProductController {
//   constructor(private service = new ProductService()) {}

//   public async insertNewProduct(req: Request, res: Response) {
//     const insertedNewProduct = await this.service.insertProduct(req.body);

//     return res.status(statusCode.CREATED).json(insertedNewProduct);
//   }
// }

async function getAll(_req: Request, res: Response) {
  const products = await productService.getAll();
  
  return res.status(statusCode.OK).json(products);
}

async function insert(req: Request, res: Response) {
  const result = await productService.create(req.body);

  return res.status(statusCode.CREATED).json(result);
}

export default {
  getAll,
  insert,
};
